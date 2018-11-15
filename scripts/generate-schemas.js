const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const TJS = require('typescript-json-schema');
const typesDir = path.join(__dirname, '..', 'src', 'types');
const dirs = fs.readdirSync(typesDir);
const exclude = ['.DS_Store', 'schema.json', 'form-data.json', 'ui-schema.json', 'core'];

const capitalizedLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const descriptions = {
  artwork: "Artwork makes up the paintings, sculptures, literature of your unique world.",
  backgrounds: "Backgrounds are used for a person to help determine ideals, bonds, etc. Where a person comes from is important to give us context on where they'll go next.",
  buildings: "Buildings are the structures that make up your cities, towns and villages.",
  calendars: "Calendars are used to record stories throughout time.",
  campaigns: "Campaigns are the central glue that holds your players together in a party and joins quests and stories together in a narrative.",
  cultures: "Cultures are a combination of language, religion, music, food and much more that make your world unique.",
  dialogs: "Dialogs are the non-playable interactions, narratives and riddles that interact with your players.",
  diseases: "Diseases are the illnesses and conditions that affect the inhabitants of your world.",
  dna: "DNA are the dice-encoded rolls that make up the essence of your character.",
  domains: "Domains are the basic geopolitical components that make up the world you're building. This includes high level nations such as kingdoms down to the lowest level communities like villages and hamlets.",
  dungeons: "Dungeons are not just traditional dungeons but also forests, caverns and mazes that make up your world's dark underbelly.",
  dynasties: "Dynasties are the familial factions that form the powers of your world and provide context for your character's rich backstory.",
  encounters: "Encounters are the heart of conflict in your world, monsters, players and enemies collide to do battle.",
  factions: "Factions are the political powers that influence your world and give depth to your quests and domains.",
  familiars: "Familiars are the companion beasts of your world. ",
  features: "Features are character based such as class features.",
  items: "Items are used for many different purposes, such as equipment to a person, clothing, weapons, food, stored items in a building or container, used in a trap and many other uses.",
  klasses: "K(C)lasses are used for a person to determine which skills and feats the character will have.",
  languages: "Languages are the spoken and written languages that fill your world.",
  monsters: "Monsters are the beasts that make up your world both natural and evil.",
  names: "Names are used for everything from naming characters to naming your domains, buildings, streets and more.",
  persons: "Persons are the characters both playable and non that make up your world.",
  quests: "Quests make up the adventures of your campaign and give players exciting goals to achieve or terrible fates to prevent.",
  races: "Races are the backbone of a person down to the DNA. Races like humans, dwarves, elves, etc. can be heavily customized.",
  religions: "Religions form the gods, demi-gods and divine entities that inspire your world.",
  sayings: "Sayings are the idioms, maxims, mottos of your world as it relates to the people, places, things and concepts.",
  sigils: "Sigils are the flags, insignias and crests that the factions of your world use to proudly show their colors.",
  spells: "Spells are used by the magic users of your world and have various effects and damages.",
  stories: "Stories have a beginning, middle, and end and have a protagonist and antagonist.",
  titles: "Titles are used to describe a certain position for a character.",
  tools: "Tools are used to make things.",
  traps: "Traps and puzzles make your dungeons more challenging by forcing the players to work together.",
  vehicles: "Vehicles are the mechanical or magical objects that can transport characters and things across your world.",
};

// replace dice
const fixDice = (options) => {
  if (options.includes('d20')) {
    if (options.includes('sex')) {
      options = [
        'd4',
        'd6',
        'd8',
        'd10',
        'd12',
        'd20',
        'd100',
        'sex',
      ];
    } else {
      options = [
        'd4',
        'd6',
        'd8',
        'd10',
        'd12',
        'd20',
        'd100',
      ];
    }
  }

  return options;
}

// dice order comes in alphabetized which is not desired
const fixDiceOrder = (schema) => {
  if (schema.properties) {
    Object.keys(schema.properties).forEach((key) => {
      const property = schema.properties[key];
      if (property.properties) fixDiceOrder(property);
      if (property.items) {
        if (property.items.enum) property.items.enum = fixDice(property.items.enum);
      }
      if (property.enum) property.enum = fixDice(property.enum);
    });
  }
}

// fix abstract properties
const fixAbstractProperties = (schema) => {
  if (schema.properties.abstractProperties) {
    delete schema.properties.abstractProperties.anyOf;
    schema.properties.abstractProperties.type = 'string';
  }
}

// capitalize all the titles in a schema
const capitalizeTitles = (schema) => {
  if (schema.properties) {
    Object.keys(schema.properties).forEach((key) => {
      const property = schema.properties[key];
      if (property.properties) capitalizeTitles(property);
      if (property.items) {
        if (property.items.title) property.items.title = splitOnCapital(property.items.title);
      }
      if (property.title) property.title = splitOnCapital(property.title);
    });
  }
}

// split a title on the capital letter from a camelCased title
const splitOnCapital = (title) => {
  let splitTitle = '';
  title.split('').forEach((letter, i) => {
    if (capitalizedLetters.includes(letter)) splitTitle += ' ';
    if (i === 0) letter = letter.toUpperCase();
    splitTitle += letter;
  });

  // edge cases
  if (splitTitle.includes('Uuid')) splitTitle = splitTitle.replace('Uuid', 'UUID');
  if (splitTitle.includes('D N A')) splitTitle = 'DNA';

  return splitTitle;
}

// process all the schemas
const processAll = () => {
  dirs.forEach((resources) => {
    if (!exclude.includes(resources)) {
      const resourceDir = path.join(typesDir, resources);
      const files = fs.readdirSync(resourceDir);
  
      // go through the files in the resource dir
      files.forEach((file) => {
        if (!exclude.includes(file)) {
          const resource = file.replace('.ts', '');
  
          console.log(`Generating for ${resource}...`);
  
          const settings = {
            ref: false,
            aliasRef: false,
            topRef: false,
            required: true,
            titles: true,
            propOrder: true,
            noExtraProps: true,
            uniqueNames: true,
          };
          const program = TJS.getProgramFromFiles([path.join(resourceDir, file)]);
          const generator = TJS.buildGenerator(program, settings);
          const symbols = generator.getUserSymbols();
          let symbol = '';
          symbols.forEach((srcSymbol) => {
            if (srcSymbol.includes(`I${resource}`)) {
              symbol = srcSymbol;
            }
          });
          const schema = generator.getSchemaForSymbol(symbol);

          capitalizeTitles(schema);
          fixDiceOrder(schema);
          fixAbstractProperties(schema);

          // add title and description
          schema.title = resource;
          schema.description = descriptions[resources];

          console.log('Writing schema.json');
          let jsonSchema = JSON.stringify(schema, null, 2);
          fs.writeFileSync(path.join(resourceDir, 'schema.json'), jsonSchema);
        }
      });
    }
  });
}

processAll();
