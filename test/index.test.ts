import { expect } from 'chai';
import { 
  Artwork,
  Background,
  Building,
  Calendar,
  Campaign,
  Culture,
  Dialog,
  Disease,
  DNA,
  Domain,
  Dungeon,
  Dynasty,
  Encounter,
  Faction,
  Familiar,
  Feature,
  Item,
  Klass,
  Language,
  Monster,
  Name,
  Person,
  Quest,
  Race,
  Religion,
  Saying,
  Sigil,
  Spell,
  Story,
  Title,
  Tool,
  Trap,
  Vehicle,
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

describe('Core', () => {
  it('Artwork', () => {
    const artwork:Artwork = new Artwork();
    expect(artwork.name).to.be.a('string');
  });
  it('Background', () => {
    const background:Background = new Background();
    expect(background.name).to.be.a('string');
  });
  it('Building', () => {
    const building:Building = new Building();
    expect(building.name).to.be.a('string');
  });
  it('Calendar', () => {
    const calendar:Calendar = new Calendar();
    expect(calendar.name).to.be.a('string');
  });
  it('Campaign', () => {
    const campaign:Campaign = new Campaign();
    expect(campaign.name).to.be.a('string');
  });
  it('Culture', () => {
    const culture:Culture = new Culture();
    expect(culture.name).to.be.a('string');
  });
  it('Dialog', () => {
    const dialog:Dialog = new Dialog();
    expect(dialog.name).to.be.a('string');
  });
  it('Disease', () => {
    const disease:Disease = new Disease();
    expect(disease.name).to.be.a('string');
  });
  it('DNA', () => {
    const dNA:DNA = new DNA();
    expect(dNA.name).to.be.a('string');
  });
  it('Domain', () => {
    const domain:Domain = new Domain();
    expect(domain.name).to.be.a('string');
  });
  it('Dungeon', () => {
    const dungeon:Dungeon = new Dungeon();
    expect(dungeon.name).to.be.a('string');
  });
  it('Dynasty', () => {
    const dynasty:Dynasty = new Dynasty();
    expect(dynasty.name).to.be.a('string');
  });
  it('Encounter', () => {
    const encounter:Encounter = new Encounter();
    expect(encounter.name).to.be.a('string');
  });
  it('Faction', () => {
    const faction:Faction = new Faction();
    expect(faction.name).to.be.a('string');
  });
  it('Familiar', () => {
    const familiar:Familiar = new Familiar();
    expect(familiar.name).to.be.a('string');
  });
  it('Feature', () => {
    const feature:Feature = new Feature();
    expect(feature.name).to.be.a('string');
  });
  it('Item', () => {
    const item:Item = new Item();
    expect(item.name).to.be.a('string');
  });
  it('Klass', () => {
    const klass:Klass = new Klass();
    expect(klass.name).to.be.a('string');
  });
  it('Language', () => {
    const language:Language = new Language();
    expect(language.name).to.be.a('string');
  });
  it('Monster', () => {
    const monster:Monster = new Monster();
    expect(monster.name).to.be.a('string');
  });
  it('Name', () => {
    const name:Name = new Name();
    expect(name.name).to.be.a('string');
  });
  it('Person', () => {
    const person:Person = new Person();
    expect(person.name).to.be.a('string');
  });
  it('Quest', () => {
    const quest:Quest = new Quest();
    expect(quest.name).to.be.a('string');
  });
  it('Race', () => {
    const race:Race = new Race();
    expect(race.name).to.be.a('string');
  });
  it('Religion', () => {
    const religion:Religion = new Religion();
    expect(religion.name).to.be.a('string');
  });
  it('Saying', () => {
    const saying:Saying = new Saying();
    expect(saying.name).to.be.a('string');
  });
  it('Sigil', () => {
    const sigil:Sigil = new Sigil();
    expect(sigil.name).to.be.a('string');
  });
  it('Spell', () => {
    const spell:Spell = new Spell();
    expect(spell.name).to.be.a('string');
  });
  it('Story', () => {
    const story:Story = new Story();
    expect(story.name).to.be.a('string');
  });
  it('Title', () => {
    const title:Title = new Title();
    expect(title.name).to.be.a('string');
  });
  it('Tool', () => {
    const tool:Tool = new Tool();
    expect(tool.name).to.be.a('string');
  });
  it('Trap', () => {
    const trap:Trap = new Trap();
    expect(trap.name).to.be.a('string');
  });
  it('Vehicle', () => {
    const vehicle:Vehicle = new Vehicle();
    expect(vehicle.name).to.be.a('string');
  });
});

describe('schemas', () => {
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