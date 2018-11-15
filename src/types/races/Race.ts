import { 
  Dice,
  ExpandedAlignments,
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";
import { Sizes } from "../dna/DNA";
import { ILinkLanguage } from "../languages/Language";

export enum DiceAndSex {
  D4 = "d4",
  D6 = "d6",
  D8 = "d8",
  D10 = "d10",
  D12 = "d12",
  D20 = "d20",
  D100 = "d100",
  Sex = "sex",
}

export enum RacialAbilityIncreaseTypes {
  All = "all", // gives to all
  Choice = "choice", // gives to your choice of ability

  Strength = "strength", // measuring physical power
  Dexterity = "dexterity", // measuring agility
  Constitution = "constitution", // measuring endurance
  Intelligence = "intelligence", // measuring reasoning and memory
  Wisdom = "wisdom", // measuring Perception and Insight
  Charisma = "charisma", // measuring force of personality
}

export interface IRacialAbilityIncrease {
  // the ability that the modifier is
  ability: RacialAbilityIncreaseTypes;

  // the amount this increases the ability
  amount: number;
}

export interface ILinkRace extends ILinkResource {}

export interface IRace extends IResource {
  // chromosomes have the dice size for each chromosome pair
  // note that this uses string instead of the Dice type as one chromosome specifies sex
  chromosomes: {
    1?: DiceAndSex
    2?: DiceAndSex
    3?: DiceAndSex
    4?: DiceAndSex
    5?: DiceAndSex
    6?: DiceAndSex
    7?: DiceAndSex
    8?: DiceAndSex
    9?: DiceAndSex
    10?: DiceAndSex
    11?: DiceAndSex
    12?: DiceAndSex
    13?: DiceAndSex
    14?: DiceAndSex
    15?: DiceAndSex
    16?: DiceAndSex
    17?: DiceAndSex
    18?: DiceAndSex
    19?: DiceAndSex
    20?: DiceAndSex
    21?: DiceAndSex
    22?: DiceAndSex
    23?: DiceAndSex
    24?: DiceAndSex
    25?: DiceAndSex
    26?: DiceAndSex
    27?: DiceAndSex
    28?: DiceAndSex
    29?: DiceAndSex
    30?: DiceAndSex
    31?: DiceAndSex
    32?: DiceAndSex,
  };

  // this determines which dice are used for the x and y chromosome
  sex: {
    x?: Dice
    y?: Dice,
  };

  // legend is used to lookup which physical characteristic is used for which chromosome
  legend: {
    // general is basic information about the body
    general?: number

    // general information on the hair like shape
    hairGeneral?: number

    // color of hair
    hairColor?: number

    // facial hair
    hairFacial?: number

    // general information on the skin like texture
    skinGeneral?: number

    // color of the skin
    skinColor?: number

    // how does the skin age
    skinAging?: number

    // shape of the face
    faceShape?: number

    // shape of the nose
    faceNose?: number

    // shape of the mouth
    faceMouth?: number

    // color of the eye
    eyeColor?: number

    // shape of the eye
    eyeShape?: number

    // details on the eye brows
    eyeBrows?: number

    // traits specific to male or females
    sex?: number,
  };

  // age range
  ageRanges: {
    child?: {
      max: number
      weight: number
      dice: Dice[],
    }
    young?: {
      max: number
      weight: number
      dice: Dice[],
    }
    middle?: {
      max: number
      weight: number
      dice: Dice[],
    }
    old?: {
      max: number
      weight: number
      dice: Dice[],
    },
  };

  // genes includes a key value pair dictionary with detailed information on a gene
  // ex: "general:C1:20": "average height"
  genes: object;

  /** 
   * ability score increases
   */
  abilitiyIncreases: IRacialAbilityIncrease[];

  /** 
   * which alignments your race tends towards
   */
  alignments: ExpandedAlignments[];

  /** 
   * which size this race is
   */
  size: Sizes;

  /** 
   * base speed
   */
  speed: number;

  /** 
   * which languages you speak by virtue of your race @link:ILinkLanguage[];
   */
  languages: ILinkLanguage[];

  /** 
   * list of subraces @link:ILinkRace[];
   */
  subraces: ILinkRace[];
}

export class Race extends Resource implements IRace {
  public chromosomes = {};
  public sex = {};
  public legend = {};
  public ageRanges = {};
  public genes = {};
  public abilitiyIncreases = [];
  public alignments = [];
  public size = null;
  public speed = 0;
  public languages = [];
  public subraces = [];
}
