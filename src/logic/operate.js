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
      if (second === 0) {
        return 'Error';
      }
      return Big(first / second);
    case OperationType.PERCENTAGE:
      if (!second || second === 'NaN') {
        return Big(first / 100);
      }
      return Big(second / 100);
    default:
      throw new Error('Invalid or missing operator');
  }
};

export default operate;
