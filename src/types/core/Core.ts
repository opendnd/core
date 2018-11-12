// types of dice
export enum Dice {
  D4 = "d4",
  D6 = "d6",
  D8 = "d8",
  D10 = "d10",
  D12 = "d12",
  D20 = "d20",
  D100 = "d100",
}

// list of damage types
export enum DamageTypes {
  Acid = "acid",
  Bludgeoning = "bludgeoning",
  Cold = "cold",
  Fire = "fire",
  Force = "force",
  Lightning = "lightning",
  Necrotic = "necrotic",
  Piercing = "piercing",
  Poison = "poison",
  Psychic = "psychic",
  Radiant = "radiant",
  Slashing = "slashing",
  Thunder = "thunder",
}

// list of abilities
export enum AbilityTypes {
  Strength = "strength", // measuring physical power
  Dexterity = "dexterity", // measuring agility
  Constitution = "constitution", // measuring endurance
  Intelligence = "intelligence", // measuring reasoning and memory
  Wisdom = "wisdom", // measuring perception and insight
  Charisma = "charisma", // measuring force of personality
}
export const abilityMapping = {
  STR: AbilityTypes.Strength,
  DEX: AbilityTypes.Dexterity,
  CON: AbilityTypes.Constitution,
  INT: AbilityTypes.Intelligence,
  WIS: AbilityTypes.Wisdom,
  CHA: AbilityTypes.Charisma,
};

// list of skills
export enum SkillTypes {
  // STR
  Athletics = "athletics",

  // DEX
  Acrobatics = "acrobatics",
  SleightOfHand = "sleightofhand",
  Stealth = "stealth",

  // INT
  Arcana = "arcana",
  History = "history",
  Investigation = "investigation",
  Nature = "nature",
  Religion = "religion",

  // WIS
  AnimalHandling = "animalhandling",
  Insight = "insight",
  Medicine = "medicine",
  Perception = "perception",
  Survival = "survival",

  // CHA
  Deception = "deception",
  Intimidation = "intimidation",
  Performance = "performance",
  Persuasion = "persuasion",
}

// list of alignments
// x: Lawful, Neutral, Chaotic
// y: Good, Neutral, Evil
export enum Alignments {
  LG = "LG", NG = "NG", CG = "CG",
  LN = "LN", NN = "NN", CN = "CN",
  LE = "LE", NE = "NE", CE = "CE",
}
export const alignmentsMatrix = {
  LG: { x: "-1", y: "1" },
  NG: { x: "0", y: "1" },
  CG: { x: "1", y: "1" },

  LN: { x: "-1", y: "0" },
  NN: { x: "0", y: "0" },
  CN: { x: "1", y: "0" },

  LE: { x: "-1", y: "-1" },
  NE: { x: "0", y: "-1" },
  CE: { x: "1", y: "-1" },
};
// these values make it easy to map to a background's ideals
export const alignmentsX = {
  "-1": "lawful",
  "0": "neutral",
  "1": "chaotic",
};
export const alignmentsY = {
  "1": "good",
  "0": "neutral",
  "-1": "evil",
};

// list of expanded alignments
// x: Lawful, Social, Neutral, Rebel, Chaotic
// y: Good, Moral, Neutral, Impure, Evil
export enum ExpandedAlignments {
  LG = "LG", SG = "SG", NG = "NG", RG = "RG", CG = "CG",
  LM = "LM", SM = "SM", NM = "NM", RM = "RM", CM = "CM",
  LN = "LN", SN = "SN", NN = "NN", RN = "RN", CN = "CN",
  LI = "LI", SI = "SI", NI = "NI", RI = "RI", CI = "CI",
  LE = "LE", SE = "SE", NE = "NE", RE = "RE", CE = "CE",
}
export const expandedAlignmentsMatrix = {
  LG: { x: "-2", y: "2" },
  SG: { x: "-1", y: "2" },
  NG: { x: "0", y: "2" },
  RG: { x: "1", y: "2" },
  CG: { x: "2", y: "2" },

  LM: { x: "-2", y: "1" },
  SM: { x: "-1", y: "1" },
  NM: { x: "0", y: "1" },
  RM: { x: "1", y: "1" },
  CM: { x: "2", y: "1" },

  LN: { x: "-2", y: "0" },
  SN: { x: "-1", y: "0" },
  NN: { x: "0", y: "0" },
  RN: { x: "1", y: "0" },
  CN: { x: "2", y: "0" },

  LI: { x: "-2", y: "-1" },
  SI: { x: "-1", y: "-1" },
  NI: { x: "0", y: "-1" },
  RI: { x: "1", y: "-1" },
  CI: { x: "2", y: "-1" },

  LE: { x: "-2", y: "-2" },
  SE: { x: "-1", y: "-2" },
  NE: { x: "0", y: "-2" },
  RE: { x: "1", y: "-2" },
  CE: { x: "2", y: "-2" },
};
// these values make it easy to map to a background's ideals
export const expandedAlignmentsX = {
  "-2": "lawful",
  "-1": "social",
  "0": "neutral",
  "1": "rebel",
  "2": "chaotic",
};
export const expandedAlignmentsY = {
  "2": "good",
  "1": "moral",
  "0": "neutral",
  "-1": "impure",
  "-2": "evil",
};

// output the advantage types
export enum AdvantageTypes {
  Advantage = "advantage",
  Neutral = "neutral",
  Disadvantage = "disadvantage",
}

// export the standard array numbers
export const standardArray = [15, 14, 13, 12, 10, 8];

// standard resource link
export interface ILinkResource {
  /**
   * This is the UUID for the linked Resource.
   */
  uuid: string;

  /**
   * This is the name for the linked Resource.
   */
  name: string;
}

// standard resource
export interface IResource {
  /**
   * This is the UUID for this Resource.
   */
  uuid: string;

  /**
   * This is the version number for generator used to create this Resource.
   */
  version: string;

  /**
   * This is the name for this Resource.
   */
  name: string;

  /**
   * This determines if this is an abstract concept a Resource like a template.
   */
  abstract: boolean;

  /**
   * These are unique properties for an abstract Resource to help with generating.
   */
  abstractProperties?: object | string;

  /**
   * This is the LinkResource that this Resource is derived from like a template. @link:ILinkResource
   */
  derivation?: ILinkResource;

  /**
   * These are specific notes for this Resource that may be helpful while writing.
   */
  notes?: string;
}

// disease class
export class Resource implements IResource {
  public uuid = "";
  public version = "";
  public name = "";
  public abstract = false;
}
