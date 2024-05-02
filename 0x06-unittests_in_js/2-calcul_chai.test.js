const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should round the numbers and return their sum', () => {
    expect(calculateNumber(1, 3)).to.equal(4);
    expect(calculateNumber(1, 3.7)).to.equal(5);
    expect(calculateNumber(1.2, 3.7)).to.equal(5);
    expect(calculateNumber(1.5, 3.7)).to.equal(6);
  });
});
