import Big from 'big.js';

const OperationType = {
  ADDITION: '+',
  SUBTRACTION: '-',
  PRODUCT: 'X',
  DIVISION: '÷',
  PERCENTAGE: '%',
};

const operate = (numberOne, numberTwo, operator) => {
  const first = Number(numberOne);
  const second = Number(numberTwo);

  switch (operator) {
    case OperationType.ADDITION:
      return Big(first + second);
    case OperationType.SUBTRACTION:
      return Big(first - second);
    case OperationType.PRODUCT:
      return Big(first * second);
    case OperationType.DIVISION:
      return Big(first / second);
    case OperationType.PERCENTAGE:
      return Big((numberTwo * 100) / numberOne);
    default:
      throw new Error('Invalid or missing operator');
  }
};

export default operate;
