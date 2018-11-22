import {
  AdvantageTypes,
  DamageTypes,
  Dice,
  ExpandedAlignments,
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";
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
  VeryRare = "very_rare",
  Legendary = "legendary",
  Artifact = "artifact",
}

// locations of equipment
export enum EquipmentLocations {
  Head = "head",
  LeftBrow = "left_brow",
  LeftEye = "left_eye",
  LeftEar = "left_ear",
  RightBrow = "right_brow",
  RightEye = "right_eye",
  RightEar = "right_ear",
  Eyes = "eyes",
  Nose = "nose",
  Mouth = "mouth",
  Chin = "chin",
  Neck = "neck",
  LeftShoulder = "left_shoulder",
  LeftBreast = "left_breast",
  LeftArm = "left_arm",
  LeftWrist = "left_wrist",
  LeftHand = "left_hand",
  LeftFingers = "left_fingers",
  LeftGrip = "left_grip",
  RightShoulder = "right_shoulder",
  RightBreast = "right_breast",
  RightArm = "right_arm",
  RightWrist = "right_wrist",
  RightHand = "right_hand",
  RightFingers = "right_fingers",
  RightGrip = "right_grip",
  Torso = "torso",
  Back = "back",
  Abdomen = "abdomen",
  Waist = "waist",
  Groin = "groin",
  Rear = "rear",
  LeftThigh = "left_thigh",
  LeftLeg = "left_leg",
  LeftKnee = "left_knee",
  LeftShin = "left_shin",
  LeftAnkle = "left_ankle",
  LeftFoot = "left_foot",
  LeftToes = "left_toes",
  RightThigh = "right_thigh",
  RightLeg = "right_leg",
  RightKnee = "right_knee",
  RightShin = "right_shin",
  RightAnkle = "right_ankle",
  RightFoot = "right_foot",
  RightToes = "right_toes",
}

export interface ILinkItem extends ILinkResource {
  // personalized nickname of the item
  nickname?: string;

  // quantity of the items, defaults to 1
  quantity?: number
}

export interface IItem extends IResource {
  // personalized nickname of the item
  nickname: string;

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

  /**
   * base cost in cp of the item 
   */
  cost: number;

  /**
   * a list of items for containers @link:ILinkItem[]
   */
  items: ILinkItem[];

  /**
   * a list of magical items for containers @link:ILinkItem[]
   */
  magicItems: ILinkItem[];

  /**
   * weight of the item 
   */
  weight: number;

  /**
   * stealth advantage/disadvantage 
   */
  stealth: AdvantageTypes;

  /**
   * rarity of the item 
   */
  rarity: RarityTypes;

  /**
   * AC for the item 
   */
  AC: number;

  /**
   * a list of locations this item can be equipped 
   */
  equippable: EquipmentLocations[];

  /**
   * if the item is sentient or not 
   */
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

  // additional properties on the item
  properties: object;
}

export class Item extends Resource implements IItem {
  public nickname = "";
  public type = null;
  public weaponProperties = [];
  public ammunition = 0;
  public ammunitionItem = null;
  public attributeDice = null;
  public damageDice = [];
  public damageType = null;
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
  public properties = {};
}
