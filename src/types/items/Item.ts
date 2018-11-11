import { AdvantageTypes, DamageTypes, Dice, ExpandedAlignments } from "../core/Core";
import { ILinkDialog } from "../dialogs/Dialog";

// types and properties of weapons
export enum WeaponTypes {
  Simple = "simple",
  Martial = "martial",
}
export enum WeaponProperties {
  Ammunition = "ammunition",
  Finesse = "finesse",
  Heavy = "heavy",
  Light = "light",
  Loading = "loading",
  Range = "range",
  Reach = "reach",
  Special = "special",
  Thrown = "thrown",
  TwoHanded = "twoHanded",
  Versatile = "versatile",
}

// weapon range
export interface IWeaponRange {
  normal: number;
  long: number;
}

// types of armors
export enum ArmorTypes {
  Light = "light",
  Medium = "medium",
  Heavy = "heavy",
  Shield = "shield",
}

// types of items
export enum ItemTypes {
  Weapon = "weapon",
  Armor = "armor",
  Tool = "tool",
  Container = "container",
  Consumable = "consumable",
  Interactable = "interactable",
  Magic = "magic",
}

// types of rarity
export enum RarityTypes {
  Common = "common",
  Uncommon = "uncommon",
  Rare = "rare",
  VeryRare = "veryRare",
  Legendary = "legendary",
  Artifact = "artifact",
}

// locations of equipment
export enum EquipmentLocations {
  Head = "head",
  LeftBrow = "leftBrow",
  LeftEye = "leftEye",
  LeftEar = "leftEar",
  RightBrow = "rightBrow",
  RightEye = "rightEye",
  RightEar = "rightEar",
  Eyes = "eyes",
  Nose = "nose",
  Mouth = "mouth",
  Chin = "chin",
  Neck = "neck",
  LeftShoulder = "leftShoulder",
  LeftBreast = "leftBreast",
  LeftArm = "leftArm",
  LeftWrist = "leftWrist",
  LeftHand = "leftHand",
  LeftFingers = "leftFingers",
  LeftGrip = "leftGrip",
  RightShoulder = "rightShoulder",
  RightBreast = "rightBreast",
  RightArm = "rightArm",
  RightWrist = "rightWrist",
  RightHand = "rightHand",
  RightFingers = "rightFingers",
  RightGrip = "rightGrip",
  Torso = "torso",
  Back = "back",
  Abdomen = "abdomen",
  Waist = "waist",
  Groin = "groin",
  Rear = "rear",
  LeftThigh = "leftThigh",
  LeftLeg = "leftLeg",
  LeftKnee = "leftKnee",
  LeftShin = "leftShin",
  LeftAnkle = "leftAnkle",
  LeftFoot = "leftFoot",
  LeftToes = "leftToes",
  RightThigh = "rightThigh",
  RightLeg = "rightLeg",
  RightKnee = "rightKnee",
  RightShin = "rightShin",
  RightAnkle = "rightAnkle",
  RightFoot = "rightFoot",
  RightToes = "rightToes",
}

export interface ILinkItem {
  // uuid for this item
  uuid: string;

  // name of the item
  name: string;

  // personalized nickname of the item
  nickcname: string;
}

export interface IItem {
  // uuid for this item
  uuid: string;

  // name of the item
  name: string;

  // personalized nickname of the item
  nickcname: string;

  // attributes of the item
  type: ItemTypes;
  weaponProperties: WeaponProperties[];
  range?: IWeaponRange;
  ammunition: number;
  ammunitionItem: ILinkItem;
  attributeDice: Dice; // usually used with versatile

  // damage value for the item is based on the amount of dice and the dice type
  damageDice: Dice[];
  damageType: DamageTypes;

  // is this an abstract concept of an item like a template?
  abstract: boolean;
  abstractProperties: object;

  // derived source or template this person was based on
  derivation: ILinkItem;

  // base cost in cp of the item
  cost: number;

  // a list of items for containers
  items: ILinkItem[];
  magicItems: ILinkItem[];

  // weight of the item
  weight: number;

  // stealth advantage/disadvantage
  stealth: AdvantageTypes;

  // rarity of the item
  rarity: RarityTypes;

  // AC for the item
  AC: number;

  // a list of locations this item can be equipped
  equippable: EquipmentLocations[];

  // if the item is sentient or not
  sentient: boolean;

  // ability scores
  abilities: {
    STR?: number // Strength, measuring physical power
    DEX?: number // Dexterity, measuring agility
    CON?: number // Constitution, measuring endurance
    INT?: number // Intelligence, measuring reasoning and memory
    WIS?: number // Wisdom, measuring Perception and Insight
    CHA?: number, // Charisma, measuring force of personality
  };

  // hit dice information
  hitDice: Dice[];
  maxHP: number;
  tempHP: number;
  HP: number;

  // alignment for the sentient item
  alignment: ExpandedAlignments;

  // purpose and conflict for the sentient item
  purpose: string;
  conflict: string;

  // a trigger value for interaction
  trigger: string;

  // for interacting with the item
  dialogs: ILinkDialog[];
  currentDialog: number;

  // special notes for the item
  notes: string;

  // additional properties on the item
  properties: object;
}

export class Item implements IItem {
  public version = "";
  public uuid = "";
  public name = "";
  public nickcname = "";
  public type = null;
  public weaponProperties = [];
  public ammunition = 0;
  public ammunitionItem = null;
  public attributeDice = null;
  public damageDice = [];
  public damageType = null;
  public abstract = false;
  public abstractProperties = {};
  public derivation = null;
  public cost = 0;
  public items = [];
  public magicItems = [];
  public weight = 0;
  public stealth = null;
  public rarity = null;
  public AC = 0;
  public equippable = [];
  public sentient = false;
  public abilities = {};
  public hitDice = [];
  public maxHP = 0;
  public tempHP = 0;
  public HP = 0;
  public alignment = null;
  public purpose = "";
  public conflict = "";
  public trigger = "";
  public dialogs = [];
  public currentDialog = 0;
  public notes = "";
  public properties = {};
}
