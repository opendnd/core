import { expect } from 'chai';
import { TplPerson, Person } from '../src/index';
import { TplItem, Item } from '../src/index';

describe('Core', function () {
  it('Person', function () {
    const person:Person = new TplPerson();
    expect(person.name).to.be.an('string');
  });

  it('Item', function () {
    const item:Item = new TplItem();
    expect(item.name).to.be.an('string');
  });
});
