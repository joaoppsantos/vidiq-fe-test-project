import { addNumberSeparator } from '../addNumberSeparator';

describe('addNumberSeparator', () => {
  it('returns a string with correct separators', () => {
    const mockBigNumber = 1234567;
    const mockBigNumberResult = addNumberSeparator(mockBigNumber);
    expect(mockBigNumberResult).toEqual('1,234,567');

    const mockSmallNumber = 123;
    const mockSmallNumberResult = addNumberSeparator(mockSmallNumber);
    expect(mockSmallNumberResult).toEqual('123');
  });
});
