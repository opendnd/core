import { expect } from 'chai';
import { 
  roll,
  backgrounds,
  cultures,
  features,
  items,
  klasses,
  languages,
  races,
} from '../src';

describe('SRD', () => {
  it('rolls a string', () => {
    expect(roll('1d5')).to.be.a('number');
  });

  it('rolls an array', () => {
    expect(roll(['d6', 'd20'])).to.be.a('number');
  });

  it('backgrounds', () => {
    expect(backgrounds).to.be.an('object');
  });

  it('cultures', () => {
    expect(cultures).to.be.an('object');
  });

  it('features', () => {
    expect(features).to.be.an('object');
  });

  it('items', () => {
    expect(items).to.be.an('object');
  });

  it('klasses', () => {
    expect(klasses).to.be.an('object');
  });

  it('languages', () => {
    expect(languages).to.be.an('object');
  });

  it('races', () => {
    expect(races).to.be.an('object');
  });
});
