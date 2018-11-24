import { expect } from 'chai';
import { 
  SRD,
} from '../src';

const {
  backgrounds,
  cultures,
  features,
  items,
  klasses,
  languages,
  races,
} = SRD;

describe('SRD', () => {
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
