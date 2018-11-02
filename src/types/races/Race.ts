import { Dice, AbilityTypes, ExpandedAlignments } from "../core/Core";
import { LinkLanguage } from "../languages/Language";
import { Sizes } from "../dna/DNA";

export enum RacialAbilityIncreaseTypes {
  All, // gives to all
  Choice, // gives to your choice of ability

  Strength, // measuring physical power
  Dexterity, // measuring agility
  Constitution, // measuring endurance
  Intelligence, // measuring reasoning and memory
  Wisdom, // measuring Perception and Insight
  Charisma, // measuring force of personality
}

export interface RacialAbilityIncrease {
  // the ability that the modifier is
  ability: RacialAbilityIncreaseTypes

  // the amount this increases the ability
  amount: number
}

export interface LinkRace {
  // uuid for this object
  uuid: string

  // name for this race
  name?: string
}

export interface Race {
  // uuid for this object
  version: string

  // uuid for this object
  uuid: string

  // name for this race
  name: string

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
    32?: string
  }

  // this determines which dice are used for the x and y chromosome
  sex: {
    x?: Dice
    y?: Dice
  }

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
    sex?: number
  }

  // age range
  ageRanges: {
    child?: {
      max: number
      weight: number
      dice: Dice[]
    }
    young?: {
      max: number
      weight: number
      dice: Dice[]
    }
    middle?: {
      max: number
      weight: number
      dice: Dice[]
    }
    old?: {
      max: number
      weight: number
      dice: Dice[]
    }
  }

  // genes includes a key value pair dictionary with detailed information on a gene
  // ex: "general:C1:20": "average height"
  genes: object

  // ability score increases
  abilitiyIncreases: RacialAbilityIncrease[]

  // which alignments your race tends towards
  alignments: ExpandedAlignments[]

  // which size this race is
  size: Sizes

  // base speed
  speed: number

  // which languages you speak by virtue of your race
  languages: LinkLanguage[]

  // list of subraces
  subraces: LinkRace[]
}

export class TplRace implements Race {
  version = ''
  uuid = ''
  name = ''
  chromosomes = {}
  sex = {}
  legend = {}
  ageRanges = {}
  genes = {}
  abilitiyIncreases = []
  alignments = []
  size = null
  speed = 0
  languages = []
  subraces = []
}