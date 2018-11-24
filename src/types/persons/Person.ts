import { 
  AbilityTypes,
  DamageTypes,
  Dice,
  ExpandedAlignments,
  SkillTypes,
  IResource,
  ILinkResource,
  Resource,
  ITreasury,
} from "../core/Core";
import { ILinkBackground } from "../backgrounds/Background";
import { ILinkBuilding } from "../buildings/Building";
import { ILinkDate } from "../calendars/Calendar";
import { ILinkCampaign } from "../campaigns/Campaign";
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
  Playable = "playable",
  NonPlayable = "non_playable",
}

// age groups
export enum AgeGroups {
  Child = "child",
  Young = "young",
  Middle = "middle",
  Old = "old",
}

// a link to a person
export interface ILinkPerson extends ILinkResource {}

// A Person are the playable and non-playable characters that make up the world
export interface IPerson extends IResource {
  /** 
   * type for this person
   */
  type: PersonTypes;

  /** 
   * data for the DNA of the person
   */
  DNA: IDNA;

  /** 
   * the following numbers should correspond to each other based on the XP chart
   */
  level: number;
  XP: number;

  /** 
   * name of the player and the character
   */
  playerName?: string;
  name: string;

  /** 
   * age number and which age group this person belongs to (based on racial lifespans)
   */
  age: number;
  ageGroup: AgeGroups;

  /**
   * power, honor, piety and reputation are similar in that they each determine your influence/respect with different groups
   */ 
  power: number;
  honor: number;
  piety: number;
  reputation: number;

  // treasury is made up of values for copper, silver, electrum, gold and platinum pieces (coins)
  // how much each coin is worth varies from towns, settings and campaigns
  // however, the chart below can be helpful as a base when determining your economy
  treasury: ITreasury;

  // base cost in cp of the person
  cost?: number;

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
    /**
     * a list of skills with proficiency
     */
    skills: SkillTypes[]

    /**
     * a list of languages with proficiency @link:ILinkTool[]
     */
    languages: ILinkLanguage[]

    /**
     * a list of armors with proficiency
     */
    armors: ArmorTypes[]

    /**
     * a list of weapons with proficiency
     */
    weapons: WeaponTypes[]

    /**
     * a list of transportation modes with proficiency
     */
    transportation: TransporationModes[]

    /**
     * a list of tools with proficiency @link:ILinkTool[]
     */
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

  /** 
   * the following deals with health conditions @link:ILinkDisease[]
   */
  conditions: ILinkDisease[];
  exhaustion: number; // level 1-6
  resistance?: DamageTypes;
  vulnerability?: DamageTypes;

  // alignment for the character
  alignment: ExpandedAlignments;

  /** 
   * the character k(c)lass from the list of available @link:ILinkKlass
   */
  klass?: ILinkKlass;

  // spellcasting information
  spellcasting?: {
    /**  
     * spell casting ability
     */
    ability?: AbilityTypes

    /**  
     * spell save DC
     */
    saveDC?: number

    /**  
     * spell attack modifier
     */
    attackModifier?: number

    /**  
     * list of known spells @link:ILinkSpell[]
     */
    spells?: ILinkSpell[],
  };

  /** 
   * cultural information @link:ILinkCulture
   */
  culture?: ILinkCulture;

  /** 
   * religion information @link:ILinkReligion
   */
  faith?: ILinkReligion;

  /**
   * mother relationship information @link:ILinkPerson
   */
  mother?: ILinkPerson;

  /**
   * father relationship information @link:ILinkPerson
   */
  father?: ILinkPerson;

  /**
   * siblings relationship information @link:ILinkPerson[]
   */
  siblings: ILinkPerson[];

  /**
   * spouse relationship information @link:ILinkPerson
   */
  spouse?: ILinkPerson;

  /**
   * children relationship information @link:ILinkPerson[]
   */
  children: ILinkPerson[];

  /**
   * family relationship information @link:ILinkDynasty
   */
  family?: ILinkDynasty;

  /**
   * liege relationship information @link:ILinkPerson[]
   */
  liege?: ILinkPerson;

  /**
   * allies relationship information @link:ILinkPerson[]
   */
  allies: ILinkPerson[];

  /**
   * enemies relationship information @link:ILinkPerson[]
   */
  enemies: ILinkPerson[];

  /**
   * Factions are a group of peopl with a common goal
   */
  factions: {
    /**
     * member of factions information @link:ILinkFaction[]
     */
    memberOf: ILinkFaction[]

    /**
     * allied factions @link:ILinkFaction[]
     */
    allies: ILinkFaction[]

    /**
     * enemy factions @link:ILinkFaction[]
     */
    enemies: ILinkFaction[],
  };

  /** 
   * birth information
   */
  birth: {
    /** 
     * location of birth @link:ILinkDomain
     */
    domain?: ILinkDomain

    /** 
     * date of birth @link:ILinkDate
     */
    date?: ILinkDate

    /** 
     * birth order
     */
    rank?: number,
  };

  /** 
   * death information
   */
  death: {
    /** 
     * location of death @link:ILinkDomain
     */
    domain?: ILinkDomain

    /** 
     * date of death @link:ILinkDate
     */
    date?: ILinkDate,
  };

  /** 
   * features and actions @link:ILinkFeature[]
   */
  features: ILinkFeature[];
  actions: string[];

  /** 
   * a list of items @link:ILinkItem[]
   */
  items: ILinkItem[];

  /** 
   * a list of magical items @link:ILinkItem[]
   */
  magicItems: ILinkItem[];

  // weight from items (encumberance)
  // not to be confused with character weight found in DNA
  weight: number;
  capacity: number;

  // equipment is what is currently equipped to the person
  // each below is a reference to a uuid in items or a physical description
  equipment: {
    /**
     * head armor @link:ILinkItem
     */
    head?: ILinkItem

    /**
     * left brow, ex: makeup @link:ILinkItem
     */
    leftBrow?: ILinkItem

    /**
     * left eye, ex: monocle @link:ILinkItem
     */
    leftEye?: ILinkItem

    /**
     * left ear, ex: jewelry @link:ILinkItem
     */
    leftEar?: ILinkItem

    /**
     * right brow, ex: makeup @link:ILinkItem
     */
    rightBrow?: ILinkItem

    /**
     * right eye, ex: monocle @link:ILinkItem
     */
    rightEye?: ILinkItem

    /**
     * right ear, ex: jewelry @link:ILinkItem
     */
    rightEar?: ILinkItem

    /**
     * both eyes, ex: glasses @link:ILinkItem
     */
    eyes?: ILinkItem

    /**
     * nose, ex: jewelry @link:ILinkItem
     */
    nose?: ILinkItem

    /**
     * mouth, ex: makeup @link:ILinkItem
     */
    mouth?: ILinkItem

    /**
     * chin, ex: jewelry @link:ILinkItem
     */
    chin?: ILinkItem

    /**
     * neck, ex: jewelry @link:ILinkItem
     */
    neck?: ILinkItem

    /**
     * left shoulder @link:ILinkItem
     */
    leftShoulder?: ILinkItem

    /**
     * left shoulder @link:ILinkItem
     */
    leftBreast?: ILinkItem

    /**
     * left arm @link:ILinkItem
     */
    leftArm?: ILinkItem

    /**
     * left wrist @link:ILinkItem
     */
    leftWrist?: ILinkItem

    /**
     * left hand, ex: glove @link:ILinkItem
     */
    leftHand?: ILinkItem

    /**
     * left fingers, ex: ring @link:ILinkItem
     */
    leftFingers?: ILinkItem

    /**
     * left grip: ex: shield @link:ILinkItem
     */
    leftGrip?: ILinkItem

    /**
     * right shoulder @link:ILinkItem
     */
    rightShoulder?: ILinkItem

    /**
     * right shoulder @link:ILinkItem
     */
    rightBreast?: ILinkItem

    /**
     * right arm @link:ILinkItem
     */
    rightArm?: ILinkItem

    /**
     * right wrist @link:ILinkItem
     */
    rightWrist?: ILinkItem

    /**
     * right hand, ex: glove @link:ILinkItem
     */
    rightHand?: ILinkItem

    /**
     * right fingers, ex: ring @link:ILinkItem
     */
    rightFingers?: ILinkItem

    /**
     * right grip: ex: sword @link:ILinkItem
     */
    rightGrip?: ILinkItem

    /**
     * torso, ex: armor @link:ILinkItem
     */
    torso?: ILinkItem

    /**
     * back, ex: cape @link:ILinkItem
     */
    back?: ILinkItem

    /**
     * abdomen, ex: cloth @link:ILinkItem
     */
    abdomen?: ILinkItem

    /**
     * waist, ex: belt @link:ILinkItem
     */
    waist?: ILinkItem

    /**
     * groin, ex: armor @link:ILinkItem
     */
    groin?: ILinkItem

    /**
     * rear, ex: cloth @link:ILinkItem
     */
    rear?: ILinkItem

    /**
     * left thigh @link:ILinkItem
     */
    leftThigh?: ILinkItem

    /**
     * left leg @link:ILinkItem
     */
    leftLeg?: ILinkItem

    /**
     * left knee @link:ILinkItem
     */
    leftKnee?: ILinkItem

    /**
     * left shin @link:ILinkItem
     */
    leftShin?: ILinkItem

    /**
     * left ankle @link:ILinkItem
     */
    leftAnkle?: ILinkItem

    /**
     * left foot @link:ILinkItem
     */
    leftFoot?: ILinkItem

    /**
     * left toes @link:ILinkItem
     */
    leftToes?: ILinkItem

    /**
     * right thigh @link:ILinkItem
     */
    rightThigh?: ILinkItem

    /**
     * right leg @link:ILinkItem
     */
    rightLeg?: ILinkItem

    /**
     * right knee @link:ILinkItem
     */
    rightKnee?: ILinkItem

    /**
     * right shin @link:ILinkItem
     */
    rightShin?: ILinkItem

    /**
     * right ankle @link:ILinkItem
     */
    rightAnkle?: ILinkItem

    /**
     * right foot @link:ILinkItem
     */
    rightFoot?: ILinkItem

    /**
     * right toes @link:ILinkItem
     */
    rightToes?: ILinkItem

    /**
     * mount @link:ILinkFamiliar
     */
    mount?: ILinkFamiliar,
  };

  /**
   * a list of people owned by this person @link:ILinkPerson[]
   */
  chattel?: ILinkPerson[];

  /**
   * domains owned by this person @link:ILinkDomain[]
   */
  domains?: ILinkDomain[];

  /**
   * buildings owned by this person @link:ILinkBuilding[]
   */
  buildings?: ILinkBuilding[];

  /**
   * titles owned by this person @link:ILinkTitle[]
   */
  titles?: ILinkTitle[];

  /**
   * familiars owned by this person @link:ILinkFamiliar[]
   */
  familiars?: ILinkFamiliar[];

  /**
   * vehicles owned by this person @link:ILinkVehicle[]
   */
  vehicles?: ILinkVehicle[];

  /** 
   * a one word description of this character's personality
   */
  trait?: string;

  /** 
   * a one word description of this person's physical characteristic
   */
  characteristic?: string;

  /** 
   * the character's mannerism in voice or behavior
   */
  mannerism?: string;

  /** 
   * the character's special talent
   */
  talent?: string;

  /** 
   * a detailed list of personality traits
   */
  personalityTraits?: string[];

  /** 
   * the character's ideal
   */
  ideal?: string;

  /** 
   * the character's bond
   */
  bond?: string;

  /** 
   * the character's flaw
   */
  flaw?: string;

  /** 
   * the background for the character and that background's specialty @link:ILinkBackground
   */
  background?: ILinkBackground;
  specialty?: string;

  /** 
   * knowledge is a list of information the player has learned about the campaign, world, etc.
   */
  knowledge?: string[];

  /** 
   * additional information about this character's backstory
   */
  backstory?: string;

  /** 
   * campaigns @link:ILinkCampaign[]
   */
  campaigns?: ILinkCampaign[];

  /** 
   * activeCampaign @link:ILinkCampaign
   */
  activeCampaign?: ILinkCampaign;

  /** 
   * quests @link:ILinkQuest[]
   */
  quests?: ILinkQuest[];

  /** 
   * stories @link:ILinkStory[]
   */
  stories?: ILinkStory[];

  /** 
   * dialogs @link:ILinkDialog[]
   */
  dialogs?: ILinkDialog[];

  /** 
   * currentDialog
   */
  currentDialog?: number;
}

export class Person extends Resource implements IPerson {
  public type = PersonTypes.NonPlayable;
  public DNA = null;
  public level = 0;
  public XP = 0;
  public name = "";
  public age = 0;
  public ageGroup = AgeGroups.Child;
  public power = 0;
  public honor = 0;
  public piety = 0;
  public reputation = 0;
  public treasury = {};
  public cost = 0;
  public abilities = {
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
  };
  public alignment = ExpandedAlignments.NN;
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
  public siblings = [];
  public children = [];
  public allies = [];
  public enemies = [];
  public features = [];
  public actions = [];
  public items = [];
  public magicItems = [];
  public weight = 0;
  public capacity = 0;
  public equipment = {};
  public factions = {
    memberOf: [],
    allies: [],
    enemies: [],
  };
  public birth = {};
  public death = {};
}
