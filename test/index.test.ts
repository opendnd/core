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
} from '../src/index';

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
