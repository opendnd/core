export * from "./types/artwork/Artwork";
export * from "./types/backgrounds/Background";
export * from "./types/buildings/Building";
export * from "./types/calendars/Calendar";
export * from "./types/campaigns/Campaign";
export * from "./types/core/Core";
export * from "./types/cultures/Culture";
export * from "./types/dialogs/Dialog";
export * from "./types/diseases/Disease";
export * from "./types/dna/DNA";
export * from "./types/domains/Domain";
export * from "./types/dungeons/Dungeon";
export * from "./types/dynasties/Dynasty";
export * from "./types/encounters/Encounter";
export * from "./types/factions/Faction";
export * from "./types/familiars/Familiar";
export * from "./types/features/Feature";
export * from "./types/items/Item";
export * from "./types/klasses/Klass";
export * from "./types/languages/Language";
export * from "./types/monsters/Monster";
export * from "./types/names/Name";
export * from "./types/persons/Person";
export * from "./types/quests/Quest";
export * from "./types/races/Race";
export * from "./types/religions/Religion";
export * from "./types/sayings/Saying";
export * from "./types/sigils/Sigil";
export * from "./types/spells/Spell";
export * from "./types/stories/Story";
export * from "./types/titles/Title";
export * from "./types/tools/Tool";
export * from "./types/traps/Trap";
export * from "./types/vehicles/Vehicle";

// get data for SRD
import { backgrounds, backgroundsDict } from "./SRD/backgrounds/index";
import { cultures, culturesDict } from "./SRD/cultures/index";
import { features, featuresDict } from "./SRD/features/index";
import { items, itemsDict } from "./SRD/items/index";
import { klasses, klassesDict } from "./SRD/klasses/index";
import { languages, languagesDict } from "./SRD/languages/index";
import { races, racesDict } from "./SRD/races/index";

export const SRD = {
  backgrounds,
  backgroundsDict,
  cultures,
  culturesDict,
  features,
  featuresDict,
  items,
  itemsDict,
  klasses,
  klassesDict,
  languages,
  languagesDict,
  races,
  racesDict,
}

export * from "./common/index";

export const schemas = {
  artwork: require('./types/artwork/schema.json'),
  backgrounds: require('./types/backgrounds/schema.json'),
  buildings: require('./types/buildings/schema.json'),
  calendars: require('./types/calendars/schema.json'),
  campaigns: require('./types/campaigns/schema.json'),
  cultures: require('./types/cultures/schema.json'),
  dialogs: require('./types/dialogs/schema.json'),
  diseases: require('./types/diseases/schema.json'),
  dna: require('./types/dna/schema.json'),
  domains: require('./types/domains/schema.json'),
  dungeons: require('./types/dungeons/schema.json'),
  dynasties: require('./types/dynasties/schema.json'),
  encounters: require('./types/encounters/schema.json'),
  factions: require('./types/factions/schema.json'),
  familiars: require('./types/familiars/schema.json'),
  features: require('./types/features/schema.json'),
  items: require('./types/items/schema.json'),
  klasses: require('./types/klasses/schema.json'),
  languages: require('./types/languages/schema.json'),
  monsters: require('./types/monsters/schema.json'),
  names: require('./types/names/schema.json'),
  persons: require('./types/persons/schema.json'),
  quests: require('./types/quests/schema.json'),
  races: require('./types/races/schema.json'),
  religions: require('./types/religions/schema.json'),
  sayings: require('./types/sayings/schema.json'),
  sigils: require('./types/sigils/schema.json'),
  spells: require('./types/spells/schema.json'),
  stories: require('./types/stories/schema.json'),
  titles: require('./types/titles/schema.json'),
  tools: require('./types/tools/schema.json'),
  traps: require('./types/traps/schema.json'),
  vehicles: require('./types/vehicles/schema.json'),
};
