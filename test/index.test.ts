import { expect } from 'chai';
import { Person } from '../src/index';
import { Item } from '../src/index';
import { schemas } from '../src/index';

describe('Core', () => {
  it('Person', () => {
    const person:Person = new Person();
    expect(person.name).to.be.an('string');
  });

  it('Item', () => {
    const item:Item = new Item();
    expect(item.name).to.be.an('string');
  });

  it('schemas', () => {
    expect(schemas.artwork).to.be.an('object');
  });
});
