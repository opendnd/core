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

// methods for generating abilities
export enum AbilityMethods {
  StandardArray = "standard_array",
  FourDSixDropLowest = "4d6k3",
  PointBuy = "point_buy",
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

export enum ShortAbilityTypes {
  STR = AbilityTypes.Strength,
  DEX = AbilityTypes.Dexterity,
  CON = AbilityTypes.Constitution,
  INT = AbilityTypes.Intelligence,
  WIS = AbilityTypes.Wisdom,
  CHA = AbilityTypes.Charisma,
}

// list of skills
export enum SkillTypes {
  // STR
  Athletics = "athletics",

  // DEX
  Acrobatics = "acrobatics",
  SleightOfHand = "sleight_of_hand",
  Stealth = "stealth",

  // INT
  Arcana = "arcana",
  History = "history",
  Investigation = "investigation",
  Nature = "nature",
  Religion = "religion",

  // WIS
  AnimalHandling = "animal_handling",
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
  LG = "lawful_good", NG = "neutral_good", CG = "chaotigood_G",
  LN = "lawful_neutral", NN = "true_neutral", CN = "chaotic_neutral",
  LE = "lawful_evil", NE = "neutral_evil", CE = "chaotic_evil",
}

export enum AlignmentsX {
  Lawful = "lawful",
  Neutral = "neutral",
  Chaotic = "chaotic",
}

export enum AlignmentsY {
  Good = "good",
  Neutral = "neutral",
  Evil = "evil",
}

export interface IAlignmentMatrixDetail {
  x: AlignmentsX;
  y: AlignmentsY;
}

export interface IAlignmentMatrixValue {
  x: number;
  y: number;
}

// list of expanded alignments
// x: Lawful, Social, Neutral, Rebel, Chaotic
// y: Good, Moral, Neutral, Impure, Evil
export enum ExpandedAlignments {
  LG = "lawful_good", SG = "social_good", NG = "neutral_good", RG = "rebel_good", CG = "chaotic_good",
  LM = "lawful_moral", SM = "social_moral", NM = "neutral_moral", RM = "rebel_moral", CM = "chaotic_moral",
  LN = "lawful_neutral", SN = "social_neutral", NN = "true_neutral", RN = "rebel_neutral", CN = "chaotic_neutral",
  LI = "lawful_impure", SI = "social_impure", NI = "neutral_impure", RI = "rebel_impure", CI = "chaotic_impure",
  LE = "lawful_evil", SE = "social_evil", NE = "neutral_evil", RE = "rebel_evil", CE = "chaotic_evil",
}

export enum ExpandedAlignmentsX {
  Lawful = "lawful",
  Social = "social",
  Neutral = "neutral",
  Rebel = "rebel",
  Chaotic = "chaotic",
}

export enum ExpandedAlignmentsY {
  Good = "good",
  Moral = "moral",
  Neutral = "neutral",
  Impure = "impure",
  Evil = "evil",
}

export interface IExpandedAlignmentMatrixDetail {
  x: ExpandedAlignmentsX;
  y: ExpandedAlignmentsY;
}

export interface IExpandedAlignmentMatrixValue {
  x: number;
  y: number;
}

// output the advantage types
export enum AdvantageTypes {
  Advantage = "advantage",
  Neutral = "neutral",
  Disadvantage = "disadvantage",
}

// standard currency types
export enum Currencies {
  CP = "cp",
  SP = "sp",
  EP = "ep",
  GP = "gp",
  PP = "pp",
}

// standard treasure interface
export interface ITreasury {
  cp?: number; // 1/100 | USD $1.00
  sp?: number; // 1/10  | USD $10.00
  ep?: number; // 1/2   | USD $50.00
  gp?: number; // 1     | USD $100.00
  pp?: number; // 10    | USD $1,000.00
};

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

// dictionary of resouce links
export interface ILinkResourceDict {
  [uuid:string]: ILinkResource
}

// dictionary of resouces
export interface IResourceDict {
  [uuid:string]: IResource
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

// resource class
export class Resource implements IResource {
  public uuid = "";
  public version = "";
  public name = "";
  public abstract = false;
}
