import { DNA } from '../dna/DNA'
import { LinkItem, WeaponTypes, ArmorTypes } from '../items/Item'
import { LinkBackground } from '../backgrounds/Background'
import { LinkBuilding } from '../buildings/Building'
import { LinkCampaign } from '../campaigns/Campaign'
import { LinkKlass } from '../klasses/Klass'
import { LinkDomain } from '../domains/Domain'
import { LinkDialog } from '../dialogs/Dialog'
import { LinkDisease } from '../diseases/Disease'
import { LinkCulture } from '../cultures/Culture'
import { LinkSpell } from '../spells/Spell'
import { LinkDate } from '../calendars/Calendar'
import { LinkFaction } from '../factions/Faction'
import { LinkDynasty } from '../dynasties/Dynasty'
import { LinkReligion } from '../religions/Religion'
import { LinkLanguage } from '../languages/Language'
import { LinkFeature } from '../features/Feature'
import { LinkFamiliar } from '../familiars/Familiar'
import { TransporationModes, LinkVehicle } from '../vehicles/Vehicle'
import { LinkTool } from '../tools/Tool'
import { LinkQuest } from '../quests/Quest'
import { LinkTitle } from '../titles/Title'
import { LinkStory } from '../stories/Story'
import { Dice, DamageTypes, AbilityTypes, SkillTypes, ExpandedAlignments } from '../core/Core'

// the types of persons
export enum PersonTypes {
  Playable,
  NonPlayable,
}

// age groups
export enum AgeGroups {
  Child,
  Young,
  Middle,
  Old,
}

// a link to a person
export interface LinkPerson {
  // uuid for this object
  uuid: string

  // name of the character
  name: string
}

// A Person are the playable and non-playable characters that make up the world
export interface Person {
  // version number from personae
  version: string

  // uuid for this object
  uuid: string

  // type for this person
  type: PersonTypes

  // is this an abstract concept of a person like a template?
  abstract: boolean
  abstractProperties: object

  // derived source or template this person was based on
  derivation: LinkPerson

  // data for the DNA of the person
  DNA: DNA

  // the following numbers should correspond to each other based on the XP chart
  level: number
  XP: number

  // name of the player and the character
  playerName: string
  name: string

  // age number and which age group this person belongs to (based on racial lifespans)
  age: number
  ageGroup: AgeGroups

  // power, honor, piety and reputation are similar in that they each determine your influence/respect with different groups
  power: number
  honor: number
  piety: number
  reputation: number

  // treasury is made up of values for copper, silver, electrum, gold and platinum pieces (coins)
  // how much each coin is worth varies from towns, settings and campaigns
  // however, the chart below can be helpful as a base when determining your economy
  treasury: {
    cp: number // 1/100 | USD $1.00
    sp: number // 1/10  | USD $10.00
    ep: number // 1/2   | USD $50.00
    gp: number // 1     | USD $100.00
    pp: number // 10    | USD $1,000.00
  }

  // base cost in cp of the person
  cost: number

  // ability scores
  abilities: {
    STR: number // Strength, measuring physical power
    DEX: number // Dexterity, measuring agility
    CON: number // Constitution, measuring endurance
    INT: number // Intelligence, measuring reasoning and memory
    WIS: number // Wisdom, measuring Perception and Insight
    CHA: number // Charisma, measuring force of personality
  }

  // list of proficiencies
  proficiencies: {
    // a list of skills with proficiency
    skills: SkillTypes[]

    // a list of languages with proficiency
    languages: LinkLanguage[]

    // a list of armors with proficiency
    armors: ArmorTypes[]

    // a list of weapons with proficiency
    weapons: WeaponTypes[]

    // a list of transportation modes with proficiency
    transportation: TransporationModes[]

    // a list of tools with proficiency
    tools: LinkTool[]

    // proficiency bonus modifier based on your level
    bonus: number // 1-4: +2 // 5-8 +3 // 9-12: +4 // 13-16: +5 // 17-20 +6
  }

  // derived stats
  initiative: number // derived from DEX modifier
  speed: number 
  AC: number // derived from equipment and sometimes DEX modifier

  // hit dice information
  hitDice: Dice[]
  maxHP: number
  tempHP: number
  HP: number

  // the following deals with health conditions
  conditions: LinkDisease[]
  exhaustion: number // level 1-6
  resistance: DamageTypes
  vulnerability: DamageTypes

  // alignment for the character
  alignment: ExpandedAlignments

  // the character k(c)lass from the list of available
  klass: LinkKlass

  // spellcasting information
  spellcasting: {
    // spell casting ability
    ability: AbilityTypes
    
    // spell save DC
    saveDC: number
    
    // spell attack modifier
    attackModifier: number
    
    // list of known spells
    spells: LinkSpell[]
  }

  // cultural information
  culture: LinkCulture
  faith: LinkReligion

  // family and relationship information
  mother: LinkPerson
  father: LinkPerson
  siblings: LinkPerson[]
  spouse: LinkPerson
  children: LinkPerson[]
  family: LinkDynasty
  liege: LinkPerson

  // allies & organization information
  allies: LinkPerson[]
  enemies: LinkPerson[]
  factions: {
    memberOf: LinkFaction[]
    allies: LinkFaction[]
    enemies: LinkFaction[]
  }

  // birth information
  birth: {
    // location of birth
    domain: LinkDomain

    // date of birth
    date: LinkDate

    // birth order
    rank: number
  }

  // death information
  death: {
    // locatin of death
    domain: LinkDomain

    // date of death
    date: LinkDate
  }

  // features and actions
  features: LinkFeature[]
  actions: string[]

  // a list of items
  items: LinkItem[]
  magicItems: LinkItem[]

  // weight from items (encumberance)
  // not to be confused with character weight found in DNA
  weight: number
  capacity: number

  // equipment is what is currently equipped to the person
  // each below is a reference to a uuid in items or a physical description
  equipment: {
    // head armor
    head: LinkItem

    // left brow, ex: makeup
    leftBrow: LinkItem

    // left eye, ex: monocle
    leftEye: LinkItem

    // left ear, ex: jewelry
    leftEar: LinkItem

    // right brow, ex: makeup
    rightBrow: LinkItem

    // right eye, ex: monocle
    rightEye: LinkItem

    // right ear, ex: jewelry
    rightEar: LinkItem

    // both eyes, ex: glasses
    eyes: LinkItem

    // nose, ex: jewelry
    nose: LinkItem

    // mouth, ex: makeup
    mouth: LinkItem

    // chin, ex: jewelry
    chin: LinkItem

    // neck, ex: jewelry
    neck: LinkItem

    // left shoulder
    leftShoulder: LinkItem

    // left shoulder
    leftBreast: LinkItem

    // left arm
    leftArm: LinkItem

    // left wrist
    leftWrist: LinkItem

    // left hand, ex: glove
    leftHand: LinkItem

    // left fingers, ex: ring
    leftFingers: LinkItem

    // left grip: ex: shield
    leftGrip: LinkItem
    
    // right shoulder
    rightShoulder: LinkItem

    // right shoulder
    rightBreast: LinkItem

    // right arm
    rightArm: LinkItem

    // right wrist
    rightWrist: LinkItem

    // right hand, ex: glove
    rightHand: LinkItem

    // right fingers, ex: ring
    rightFingers: LinkItem

    // right grip: ex: sword
    rightGrip: LinkItem

    // torso, ex: armor
    torso: LinkItem

    // back, ex: cape
    back: LinkItem

    // abdomen, ex: cloth
    abdomen: LinkItem

    // waist, ex: belt
    waist: LinkItem

    // groin, ex: armor
    groin: LinkItem

    // rear, ex: cloth
    rear: LinkItem

    // left thigh
    leftThigh: LinkItem

    // left leg
    leftLeg: LinkItem

    // left knee
    leftKnee: LinkItem

    // left shin
    leftShin: LinkItem

    // left ankle
    leftAnkle: LinkItem

    // left foot
    leftFoot: LinkItem

    // left toes
    leftToes: LinkItem

    // right thigh
    rightThigh: LinkItem

    // right leg
    rightLeg: LinkItem

    // right knee
    rightKnee: LinkItem

    // right shin
    rightShin: LinkItem

    // right ankle
    rightAnkle: LinkItem

    // right foot
    rightFoot: LinkItem

    // right toes
    rightToes: LinkItem

    // mount
    mount: LinkFamiliar
  }

  // additional owernship
  chattel: LinkPerson[]
  domains: LinkDomain[]
  buildings: LinkBuilding[]
  titles: LinkTitle[]
  familiars: LinkFamiliar[]
  vehicles: LinkVehicle[]

  // a one word description of this character's personality
  trait: string

  // a one word description of this person's physical characteristic
  characteristic: string

  // the character's mannerism in voice or behavior
  mannerism: string

  // the character's special talent
  talent: string

  // a detailed list of personality traits
  personalityTraits: string[]

  // the character's ideal
  ideal: string

  // the character's bond
  bond: string

  // the character's flaw
  flaw: string

  // the background for the character and that background's specialty
  background: LinkBackground
  specialty: string

  // knowledge is a list of information the player has learned about the campaign, world, etc.
  knowledge: string[]

  // additional information about this character's backstory
  backstory: string

  // campaign information
  campaigns: LinkCampaign[]
  activeCampaign: LinkCampaign
  quests: LinkQuest[]
  stories: LinkStory[]
  dialogs: LinkDialog[]
  currentDialog: number

  // specific notes for this person like campaign notes
  notes: string
}

export class TplPerson implements Person {
  version = ''
  uuid = ''
  type = PersonTypes.NonPlayable
  abstract = false
  abstractProperties = {}
  derivation = null
  DNA = null
  level = 0
  XP = 0
  playerName = ''
  name = ''
  age = 0
  ageGroup = null
  power = 0
  honor = 0
  piety = 0
  reputation = 0
  treasury = {
    cp: 0,
    sp: 0,
    ep: 0,
    gp: 0,
    pp: 0,
  }
  cost = 0
  abilities = {
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
  }
  proficiencies = {
    skills: [],
    languages: [],
    armors: [],
    weapons: [],
    transportation: [],
    tools: [],
    bonus: 0,
  }
  initiative = 0
  speed = 0 
  AC = 0
  hitDice = []
  maxHP = 0
  tempHP = 0
  HP = 0
  conditions = []
  exhaustion = 0
  resistance = null
  vulnerability = null
  alignment = null
  klass = null
  spellcasting = {
    ability: null,
    saveDC: 0,
    attackModifier: 0,
    spells: [],
  }
  culture = null
  faith = null
  mother = null
  father = null
  siblings = []
  spouse = null
  children = []
  family = null
  liege = null
  allies = []
  enemies = []
  factions = {
    memberOf: [],
    allies: [],
    enemies: [],
  }
  birth = {
    domain: null,
    date: null,
    rank: 0,
  }
  death = {
    domain: null,
    date: null,
  }
  features = []
  actions = []
  items = []
  magicItems = []
  weight = 0
  capacity = 0
  equipment: {
    head: null,
    leftBrow: null,
    leftEye: null,
    leftEar: null,
    rightBrow: null,
    rightEye: null,
    rightEar: null,
    eyes: null,
    nose: null,
    mouth: null,
    chin: null,
    neck: null,
    leftShoulder: null,
    leftBreast: null,
    leftArm: null,
    leftWrist: null,
    leftHand: null,
    leftFingers: null,
    leftGrip: null,
    rightShoulder: null,
    rightBreast: null,
    rightArm: null,
    rightWrist: null,
    rightHand: null,
    rightFingers: null,
    rightGrip: null,
    torso: null,
    back: null,
    abdomen: null,
    waist: null,
    groin: null,
    rear: null,
    leftThigh: null,
    leftLeg: null,
    leftKnee: null,
    leftShin: null,
    leftAnkle: null,
    leftFoot: null,
    leftToes: null,
    rightThigh: null,
    rightLeg: null,
    rightKnee: null,
    rightShin: null,
    rightAnkle: null,
    rightFoot: null,
    rightToes: null,
    mount: null,
  }
  chattel = []
  domains = []
  buildings = []
  titles = []
  familiars = []
  vehicles = []
  trait = '' 
  characteristic = '' 
  mannerism = '' 
  talent = '' 
  personalityTraits = []
  ideal = ''
  bond = ''
  flaw = ''
  background = null
  specialty = ''
  knowledge = []
  backstory = ''
  campaigns = []
  activeCampaign = null
  quests = []
  stories = []
  dialogs = []
  currentDialog = 0
  notes = ''
}
