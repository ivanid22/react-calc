import Big from 'big.js';

const OperationType = {
  ADDITION: '+',
  SUBTRACTION: '-',
  PRODUCT: 'X',
  DIVISION: '÷',
  PERCENTAGE: '%',
};

const operate = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case OperationType.ADDITION:
      return Big(numberOne + numberTwo);
    case OperationType.SUBTRACTION:
      return Big(numberOne - numberTwo);
    case OperationType.PRODUCT:
      return Big(numberOne * numberTwo);
    case OperationType.DIVISION:
      return Big(numberOne / numberTwo);
    case OperationType.PERCENTAGE:
      return Big((numberTwo * 100) / numberOne);
    default:
      throw new Error('Invalid or missing operator');
  }
};

export default operate;
