import { 
  Dice,
  ExpandedAlignments,
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";
import { Sizes } from "../dna/DNA";
import { ILinkLanguage } from "../languages/Language";
import { ILinkFeature } from "../features/Feature";

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

export enum Chromosomes {
  C1 = "1",
  C2 = "2",
  C3 = "3",
  C4 = "4",
  C5 = "5",
  C6 = "6",
  C7 = "7",
  C8 = "8",
  C9 = "9",
  C10 = "10",
  C11 = "11",
  C12 = "12",
  C13 = "13",
  C14 = "14",
  C15 = "15",
  C16 = "16",
  C17 = "17",
  C18 = "18",
  C19 = "19",
  C20 = "20",
  C21 = "21",
  C22 = "22",
  C23 = "23",
  C24 = "24",
  C25 = "25",
  C26 = "26",
  C27 = "27",
  C28 = "28",
  C29 = "29",
  C30 = "30",
  C31 = "31",
  C32 = "32",
}

export enum Categories {
  General = "general",
  HairGeneral = "hairGeneral",
  HairColor = "hairColor",
  HairFacial = "hairFacial",
  SkinGeneral = "skinGeneral",
  SkinColor = "skinColor",
  SkinAging = "skinAging",
  FaceShape = "faceShape",
  FaceNose = "faceNose",
  FaceMouth = "faceMouth",
  EyeColor = "eyeColor",
  EyeShape = "eyeShape",
  EyeBrows = "eyeBrows",
  Sex = "sex",
}

export interface ICategories {
  /**
   * general is basic information about the body
   */
  general?: Chromosomes;

  /**
   * general information on the hair like shape
   */
  hairGeneral?: Chromosomes;

  /**
   * color of hair
   */
  hairColor?: Chromosomes;

  /**
   * facial hair
   */
  hairFacial?: Chromosomes;

  /**
   * general information on the skin like texture
   */
  skinGeneral?: Chromosomes;

  /**
   * color of the skin
   */
  skinColor?: Chromosomes;

  /**
   * how does the skin age
   */
  skinAging?: Chromosomes;

  /**
   * shape of the face
   */
  faceShape?: Chromosomes;

  /**
   * shape of the nose
   */
  faceNose?: Chromosomes;

  /**
   * shape of the mouth
   */
  faceMouth?: Chromosomes;

  /**
   * color of the eye
   */
  eyeColor?: Chromosomes;

  /**
   * shape of the eye
   */
  eyeShape?: Chromosomes;

  /**
   * details on the eye brows
   */
  eyeBrows?: Chromosomes;

  /**
   * traits specific to male or females
   */
  sex?: Chromosomes;
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

export interface IAgeGroup {
  /**
   * The minimum age for this group
   */
  min: number;

  /**
   * The maximum age for this group
   */
  max: number;

  /**
   * The weight percentage for how common this age is for this race
   */
  weight: number;

  /**
   * The dice to roll for a random age in this group (add min + dice rol)
   */
  dice: Dice[];
}

// This is used for height and weight
export interface IBaseGroup {
  /**
   * This is the base value
   */
  base: number;

  /**
   * This is the dice to roll to generate the random value
   */
  dice?: Dice[];

  /**
   * This is the multiplier to be used instead of the dice roll
   */
  multiplier?: number;
}

export interface IRacialAbilityIncrease {
  // the ability that the modifier is
  ability: RacialAbilityIncreaseTypes;

  // the amount this increases the ability
  amount: number;
}

// a gene contains information about the person
// This will output "general:C1:17": "tall"
export interface IGene {
  /**
   * The category is the category for the trait
   */
  category: Categories;

  /**
   * Chromosome is which chromosome is used for this category
   */
  chromosome: Chromosomes;

  /**
   * This is the roll that was made in the DNA ex: 15=20
   */
  roll: string;

  /**
   * This is the trait that is associated with this
   */
  trait: string;
}

export interface ILinkRace extends ILinkResource {}

export interface ISubRace extends IResource {
  /**
   * Description of the race
   */
  description: string;

  /** 
   * ability score increases
   */
  abilitiyIncreases: IRacialAbilityIncrease[];

  /** 
   * which alignments your race tends towards
   */
  alignments?: ExpandedAlignments[];

  /** 
   * which languages you speak by virtue of your race @link:ILinkLanguage[];
   */
  languages?: ILinkLanguage[];

  /**
   * Weight is used to generate a random weight
   * Number is in pounds (lbs)
   */
  weight?: IBaseGroup
  
  /**
   * Height is used to generate a random height
   * Number is in inches (in)
   */
  height?: IBaseGroup

  /**
   * A list of racial features @link:ILinkFeature[]
   */
  features?: ILinkFeature[]
}

export interface IRace extends IResource {
  /**
   * Description of the race
   */
  description: string;

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

  /**
   * this determines which dice are used for the x and y chromosome
   */
  sex: {
    x?: Dice
    y?: Dice,
  };

  /**
   * categories is used to lookup which physical characteristic is used for which chromosome
   */
  categories: ICategories;

  /**
   * age range
   */
  ageRanges: {
    child?: IAgeGroup
    young?: IAgeGroup
    middle?: IAgeGroup
    old?: IAgeGroup,
  };

  /**
   * the dictionary includes a fast lookup of genes
   * includeing a key value pair with a link to the trait
   * ex: "general:C1:17": "tall"
   */ 
  dictionary: {
    [gene:string]: string,
  };

  /**
   * This is a more user friendly list of genes
   */
  genes?: IGene[];

  /** 
   * ability score increases
   */
  abilitiyIncreases: IRacialAbilityIncrease[];

  /** 
   * which alignments your race tends towards
   */
  alignments?: ExpandedAlignments[];

  /** 
   * which size this race is
   */
  size?: Sizes;

  /** 
   * base speed
   */
  speed?: number;

  /** 
   * which languages you speak by virtue of your race @link:ILinkLanguage[]
   */
  languages?: ILinkLanguage[];

  /** 
   * Subraces
   */
  subraces?: ISubRace[];

  /**
   * Weight is used to generate a random weight
   * Number is in pounds (lbs)
   */
  weight?: IBaseGroup
  
  /**
   * Height is used to generate a random height
   * Number is in inches (in)
   */
  height?: IBaseGroup

  /**
   * A list of racial features @link:ILinkFeature[]
   */
  features?: ILinkFeature[]
}

export class Race extends Resource implements IRace {
  public description = "";
  public chromosomes = {};
  public sex = {};
  public categories = {};
  public ageRanges = {};
  public dictionary = {};
  public abilitiyIncreases = [];
}
