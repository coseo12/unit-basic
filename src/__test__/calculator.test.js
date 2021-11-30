const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let calculator = null;
  beforeEach(() => {
    calculator = new Calculator();
  });

  it('inits with 0', () => {
    expect(calculator.value).toBe(0);
  });

  it('sets', () => {
    calculator.set(9);
    expect(calculator.value).toBe(9);
  });

  it('clear', () => {
    calculator.set(9);
    calculator.clear();
    expect(calculator.value).toBe(0);
  });

  it('add', () => {
    calculator.set(1);
    calculator.add(2);
    expect(calculator.value).toBe(3);
  });

  it('subtract', () => {
    calculator.set(1);
    calculator.subtract(2);
    expect(calculator.value).toBe(-1);
  });

  it('multiply', () => {
    calculator.set(1);
    calculator.multiply(2);
    expect(calculator.value).toBe(2);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      calculator.divide(0);
      expect(calculator.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      calculator.set(1);
      calculator.divide(0);
      expect(calculator.value).toBe(Infinity);
    });
  });
});
