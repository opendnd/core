import { 
  Dice,
  ExpandedAlignments,
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";
import { Sizes } from "../dna/DNA";
import { ILinkLanguage } from "../languages/Language";

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
    1?: string
    2?: string
    3?: string
    4?: string
    5?: string
    6?: string
    7?: string
    8?: string
    9?: string
    10?: string
    11?: string
    12?: string
    13?: string
    14?: string
    15?: string
    16?: string
    17?: string
    18?: string
    19?: string
    20?: string
    21?: string
    22?: string
    23?: string
    24?: string
    25?: string
    26?: string
    27?: string
    28?: string
    29?: string
    30?: string
    31?: string
    32?: string,
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

  // ability score increases
  abilitiyIncreases: IRacialAbilityIncrease[];

  // which alignments your race tends towards
  alignments: ExpandedAlignments[];

  // which size this race is
  size: Sizes;

  // base speed
  speed: number;

  // which languages you speak by virtue of your race
  languages: ILinkLanguage[];

  // list of subraces
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
