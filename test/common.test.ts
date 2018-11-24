import { expect } from 'chai';
import { 
  roll,
} from '../src';

describe('Common', () => {
  it('rolls a string', () => {
    expect(roll('1d5')).to.be.a('number');
  });

  it('rolls an array', () => {
    expect(roll(['d6', 'd20'])).to.be.a('number');
  });
});
