import { expect } from 'chai';
import { 
  schemas,
} from '../src/index';
const {
  artwork,
  backgrounds,
  buildings,
  calendars,
  campaigns,
  cultures,
  dialogs,
  diseases,
  dna,
  domains,
  dungeons,
  dynasties,
  encounters,
  factions,
  familiars,
  features,
  items,
  klasses,
  languages,
  monsters,
  names,
  persons,
  quests,
  races,
  religions,
  sayings,
  sigils,
  spells,
  stories,
  titles,
  tools,
  traps,
  vehicles,
} = schemas;

describe('Schemas', () => {
  it('artwork', () => {
    expect(artwork).to.be.an('object');
  });
  it('backgrounds', () => {
    expect(backgrounds).to.be.an('object');
  });
  it('buildings', () => {
    expect(buildings).to.be.an('object');
  });
  it('calendars', () => {
    expect(calendars).to.be.an('object');
  });
  it('campaigns', () => {
    expect(campaigns).to.be.an('object');
  });
  it('cultures', () => {
    expect(cultures).to.be.an('object');
  });
  it('dialogs', () => {
    expect(dialogs).to.be.an('object');
  });
  it('diseases', () => {
    expect(diseases).to.be.an('object');
  });
  it('dna', () => {
    expect(dna).to.be.an('object');
  });
  it('domains', () => {
    expect(domains).to.be.an('object');
  });
  it('dungeons', () => {
    expect(dungeons).to.be.an('object');
  });
  it('dynasties', () => {
    expect(dynasties).to.be.an('object');
  });
  it('encounters', () => {
    expect(encounters).to.be.an('object');
  });
  it('factions', () => {
    expect(factions).to.be.an('object');
  });
  it('familiars', () => {
    expect(familiars).to.be.an('object');
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
  it('monsters', () => {
    expect(monsters).to.be.an('object');
  });
  it('names', () => {
    expect(names).to.be.an('object');
  });
  it('persons', () => {
    expect(persons).to.be.an('object');
  });
  it('quests', () => {
    expect(quests).to.be.an('object');
  });
  it('races', () => {
    expect(races).to.be.an('object');
  });
  it('religions', () => {
    expect(religions).to.be.an('object');
  });
  it('sayings', () => {
    expect(sayings).to.be.an('object');
  });
  it('sigils', () => {
    expect(sigils).to.be.an('object');
  });
  it('spells', () => {
    expect(spells).to.be.an('object');
  });
  it('stories', () => {
    expect(stories).to.be.an('object');
  });
  it('titles', () => {
    expect(titles).to.be.an('object');
  });
  it('tools', () => {
    expect(tools).to.be.an('object');
  });
  it('traps', () => {
    expect(traps).to.be.an('object');
  });
  it('vehicles', () => {
    expect(vehicles).to.be.an('object');
  });
});