import operate from './operate';

export const ButtonType = {
  OPERATIONS: ['+', '-', '%', 'X', '÷'],
  NEGATIVIZE: '+/-',
  EQUALS: '=',
  POINT: '.',
  ALL_CLEAR: 'AC',
};

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
        total: null,
        next: null,
        operation: null,
      };
    case ButtonType.POINT:
      if (next) {
        return {
          total,
          next: next.indexOf('.') === -1 ? `${next}.` : next,
          operation,
        };
      }
      if (total) {
        return {
          total: total.indexOf('.') === -1 ? `${total}.` : total,
          next,
          operation,
        };
      }
      return { total, next, operation };
    case ButtonType.EQUALS:
      if (total && next && operation) {
        return {
          total: operate(total, next, operation).toString(),
          next: null,
          operation: null,
        };
      }
      break;
    default:
      if (ButtonType.OPERATIONS.includes(buttonName)) {
        if (next) {
          return { // Next is present, return the result of the operation
            total: operate(total, next, operation).toString(),
            next: null,
            operation: buttonName,
          };
        }
        return { // Next is empty, return the operation type only
          total,
          next,
          operation: buttonName,
        };
      }
  }

  return { // No case matches, return original params
    total,
    next,
    operation,
  };
};

export default calculate;
