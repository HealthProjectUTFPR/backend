import { BalanceFactory } from './balance.factory';

describe('BalanceFactory', () => {
  it('should create an instance', () => {
    expect(new BalanceFactory()).toBeTruthy();
  });
});