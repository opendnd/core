import { ILinkBackground } from "../backgrounds/Background";
import { ILinkBuilding } from "../buildings/Building";
import { ILinkDate } from "../calendars/Calendar";
import { ILinkCampaign } from "../campaigns/Campaign";
import { AbilityTypes, DamageTypes, Dice, ExpandedAlignments, SkillTypes } from "../core/Core";
import { ILinkCulture } from "../cultures/Culture";
import { ILinkDialog } from "../dialogs/Dialog";
import { ILinkDisease } from "../diseases/Disease";
import { IDNA } from "../dna/DNA";
import { ILinkDomain } from "../domains/Domain";
import { ILinkDynasty } from "../dynasties/Dynasty";
import { ILinkFaction } from "../factions/Faction";
import { ILinkFamiliar } from "../familiars/Familiar";
import { ILinkFeature } from "../features/Feature";
import { ArmorTypes, ILinkItem, WeaponTypes } from "../items/Item";
import { ILinkKlass } from "../klasses/Klass";
import { ILinkLanguage } from "../languages/Language";
import { ILinkQuest } from "../quests/Quest";
import { ILinkReligion } from "../religions/Religion";
import { ILinkSpell } from "../spells/Spell";
import { ILinkStory } from "../stories/Story";
import { ILinkTitle } from "../titles/Title";
import { ILinkTool } from "../tools/Tool";
import { ILinkVehicle, TransporationModes } from "../vehicles/Vehicle";

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
export interface ILinkPerson {
  // uuid for this object
  uuid: string;

  // name of the character
  name: string;
}

// A Person are the playable and non-playable characters that make up the world
export interface IPerson {
  // version number from personae
  version: string;

  // uuid for this object
  uuid: string;

  // type for this person
  type: PersonTypes;

  // is this an abstract concept of a person like a template?
  abstract: boolean;
  abstractProperties: object;

  // derived source or template this person was based on
  derivation: ILinkPerson;

  // data for the DNA of the person
  DNA: IDNA;

  // the following numbers should correspond to each other based on the XP chart
  level: number;
  XP: number;

  // name of the player and the character
  playerName: string;
  name: string;

  // age number and which age group this person belongs to (based on racial lifespans)
  age: number;
  ageGroup: AgeGroups;

  // power, honor, piety and reputation are similar in that they each determine your influence/respect with different groups
  power: number;
  honor: number;
  piety: number;
  reputation: number;

  // treasury is made up of values for copper, silver, electrum, gold and platinum pieces (coins)
  // how much each coin is worth varies from towns, settings and campaigns
  // however, the chart below can be helpful as a base when determining your economy
  treasury: {
    cp: number // 1/100 | USD $1.00
    sp: number // 1/10  | USD $10.00
    ep: number // 1/2   | USD $50.00
    gp: number // 1     | USD $100.00
    pp: number, // 10    | USD $1,000.00
  };

  // base cost in cp of the person
  cost: number;

  // ability scores
  abilities: {
    STR: number // Strength, measuring physical power
    DEX: number // Dexterity, measuring agility
    CON: number // Constitution, measuring endurance
    INT: number // Intelligence, measuring reasoning and memory
    WIS: number // Wisdom, measuring Perception and Insight
    CHA: number, // Charisma, measuring force of personality
  };

  // list of proficiencies
  proficiencies: {
    // a list of skills with proficiency
    skills: SkillTypes[]

    // a list of languages with proficiency
    languages: ILinkLanguage[]

    // a list of armors with proficiency
    armors: ArmorTypes[]

    // a list of weapons with proficiency
    weapons: WeaponTypes[]

    // a list of transportation modes with proficiency
    transportation: TransporationModes[]

    // a list of tools with proficiency
    tools: ILinkTool[]

    // proficiency bonus modifier based on your level
    bonus: number, // 1-4: +2 // 5-8 +3 // 9-12: +4 // 13-16: +5 // 17-20 +6
  };

  // derived stats
  initiative: number; // derived from DEX modifier
  speed: number;
  AC: number; // derived from equipment and sometimes DEX modifier

  // hit dice information
  hitDice: Dice[];
  maxHP: number;
  tempHP: number;
  HP: number;

  // the following deals with health conditions
  conditions: ILinkDisease[];
  exhaustion: number; // level 1-6
  resistance: DamageTypes;
  vulnerability: DamageTypes;

  // alignment for the character
  alignment: ExpandedAlignments;

  // the character k(c)lass from the list of available
  klass: ILinkKlass;

  // spellcasting information
  spellcasting: {
    // spell casting ability
    ability: AbilityTypes

    // spell save DC
    saveDC: number

    // spell attack modifier
    attackModifier: number

    // list of known spells
    spells: ILinkSpell[],
  };

  // cultural information
  culture: ILinkCulture;
  faith: ILinkReligion;

  // family and relationship information
  mother: ILinkPerson;
  father: ILinkPerson;
  siblings: ILinkPerson[];
  spouse: ILinkPerson;
  children: ILinkPerson[];
  family: ILinkDynasty;
  liege: ILinkPerson;

  // allies & organization information
  allies: ILinkPerson[];
  enemies: ILinkPerson[];
  factions: {
    memberOf: ILinkFaction[]
    allies: ILinkFaction[]
    enemies: ILinkFaction[],
  };

  // birth information
  birth: {
    // location of birth
    domain: ILinkDomain

    // date of birth
    date: ILinkDate

    // birth order
    rank: number,
  };

  // death information
  death: {
    // locatin of death
    domain: ILinkDomain

    // date of death
    date: ILinkDate,
  };

  // features and actions
  features: ILinkFeature[];
  actions: string[];

  // a list of items
  items: ILinkItem[];
  magicItems: ILinkItem[];

  // weight from items (encumberance)
  // not to be confused with character weight found in DNA
  weight: number;
  capacity: number;

  // equipment is what is currently equipped to the person
  // each below is a reference to a uuid in items or a physical description
  equipment: {
    // head armor
    head: ILinkItem

    // left brow, ex: makeup
    leftBrow: ILinkItem

    // left eye, ex: monocle
    leftEye: ILinkItem

    // left ear, ex: jewelry
    leftEar: ILinkItem

    // right brow, ex: makeup
    rightBrow: ILinkItem

    // right eye, ex: monocle
    rightEye: ILinkItem

    // right ear, ex: jewelry
    rightEar: ILinkItem

    // both eyes, ex: glasses
    eyes: ILinkItem

    // nose, ex: jewelry
    nose: ILinkItem

    // mouth, ex: makeup
    mouth: ILinkItem

    // chin, ex: jewelry
    chin: ILinkItem

    // neck, ex: jewelry
    neck: ILinkItem

    // left shoulder
    leftShoulder: ILinkItem

    // left shoulder
    leftBreast: ILinkItem

    // left arm
    leftArm: ILinkItem

    // left wrist
    leftWrist: ILinkItem

    // left hand, ex: glove
    leftHand: ILinkItem

    // left fingers, ex: ring
    leftFingers: ILinkItem

    // left grip: ex: shield
    leftGrip: ILinkItem

    // right shoulder
    rightShoulder: ILinkItem

    // right shoulder
    rightBreast: ILinkItem

    // right arm
    rightArm: ILinkItem

    // right wrist
    rightWrist: ILinkItem

    // right hand, ex: glove
    rightHand: ILinkItem

    // right fingers, ex: ring
    rightFingers: ILinkItem

    // right grip: ex: sword
    rightGrip: ILinkItem

    // torso, ex: armor
    torso: ILinkItem

    // back, ex: cape
    back: ILinkItem

    // abdomen, ex: cloth
    abdomen: ILinkItem

    // waist, ex: belt
    waist: ILinkItem

    // groin, ex: armor
    groin: ILinkItem

    // rear, ex: cloth
    rear: ILinkItem

    // left thigh
    leftThigh: ILinkItem

    // left leg
    leftLeg: ILinkItem

    // left knee
    leftKnee: ILinkItem

    // left shin
    leftShin: ILinkItem

    // left ankle
    leftAnkle: ILinkItem

    // left foot
    leftFoot: ILinkItem

    // left toes
    leftToes: ILinkItem

    // right thigh
    rightThigh: ILinkItem

    // right leg
    rightLeg: ILinkItem

    // right knee
    rightKnee: ILinkItem

    // right shin
    rightShin: ILinkItem

    // right ankle
    rightAnkle: ILinkItem

    // right foot
    rightFoot: ILinkItem

    // right toes
    rightToes: ILinkItem

    // mount
    mount: ILinkFamiliar,
  };

  // additional owernship
  chattel: ILinkPerson[];
  domains: ILinkDomain[];
  buildings: ILinkBuilding[];
  titles: ILinkTitle[];
  familiars: ILinkFamiliar[];
  vehicles: ILinkVehicle[];

  // a one word description of this character's personality
  trait: string;

  // a one word description of this person's physical characteristic
  characteristic: string;

  // the character's mannerism in voice or behavior
  mannerism: string;

  // the character's special talent
  talent: string;

  // a detailed list of personality traits
  personalityTraits: string[];

  // the character's ideal
  ideal: string;

  // the character's bond
  bond: string;

  // the character's flaw
  flaw: string;

  // the background for the character and that background's specialty
  background: ILinkBackground;
  specialty: string;

  // knowledge is a list of information the player has learned about the campaign, world, etc.
  knowledge: string[];

  // additional information about this character's backstory
  backstory: string;

  // campaign information
  campaigns: ILinkCampaign[];
  activeCampaign: ILinkCampaign;
  quests: ILinkQuest[];
  stories: ILinkStory[];
  dialogs: ILinkDialog[];
  currentDialog: number;

  // specific notes for this person like campaign notes
  notes: string;
}

export class Person implements IPerson {
  public version = "";
  public uuid = "";
  public type = PersonTypes.NonPlayable;
  public abstract = false;
  public abstractProperties = {};
  public derivation = null;
  public DNA = null;
  public level = 0;
  public XP = 0;
  public playerName = "";
  public name = "";
  public age = 0;
  public ageGroup = null;
  public power = 0;
  public honor = 0;
  public piety = 0;
  public reputation = 0;
  public treasury = {
    cp: 0,
    sp: 0,
    ep: 0,
    gp: 0,
    pp: 0,
  };
  public cost = 0;
  public abilities = {
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
  };
  public proficiencies = {
    skills: [],
    languages: [],
    armors: [],
    weapons: [],
    transportation: [],
    tools: [],
    bonus: 0,
  };
  public initiative = 0;
  public speed = 0;
  public AC = 0;
  public hitDice = [];
  public maxHP = 0;
  public tempHP = 0;
  public HP = 0;
  public conditions = [];
  public exhaustion = 0;
  public resistance = null;
  public vulnerability = null;
  public alignment = null;
  public klass = null;
  public spellcasting = {
    ability: null,
    saveDC: 0,
    attackModifier: 0,
    spells: [],
  };
  public culture = null;
  public faith = null;
  public mother = null;
  public father = null;
  public siblings = [];
  public spouse = null;
  public children = [];
  public family = null;
  public liege = null;
  public allies = [];
  public enemies = [];
  public factions = {
    memberOf: [],
    allies: [],
    enemies: [],
  };
  public birth = {
    domain: null,
    date: null,
    rank: 0,
  };
  public death = {
    domain: null,
    date: null,
  };
  public features = [];
  public actions = [];
  public items = [];
  public magicItems = [];
  public weight = 0;
  public capacity = 0;
  public equipment: {
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
  };
  public chattel = [];
  public domains = [];
  public buildings = [];
  public titles = [];
  public familiars = [];
  public vehicles = [];
  public trait = "";
  public characteristic = "";
  public mannerism = "";
  public talent = "";
  public personalityTraits = [];
  public ideal = "";
  public bond = "";
  public flaw = "";
  public background = null;
  public specialty = "";
  public knowledge = [];
  public backstory = "";
  public campaigns = [];
  public activeCampaign = null;
  public quests = [];
  public stories = [];
  public dialogs = [];
  public currentDialog = 0;
  public notes = "";
}
