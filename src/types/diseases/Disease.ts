import {
  AbilityTypes,
  DamageTypes,
  Dice,
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";
import { ITrait } from "../dna/DNA";

// condition types
export enum ConditionTypes {
  Acute = "acute",
  Chronic = "chronic",
}

// agent types
export enum AgentTypes {
  Bacterium = "bacterium",
  Virus = "virus",
  Fungus = "fungus",
  Protist = "protist",
}

// transmission types
export enum TransmissionTypes {
  Air = "air",
  Vector = "vector",
  Animal = "animal",
  Food = "food",
  Environmental = "environmental",
}

// types of diseases
export enum DiseaseTypes {
  Infectious = "infectious",
  Autoimmune = "autoimmune",
  Congenital = "congenital",
  Dietary = "dietary",
  Cognitive = "cognitive",
}

// incubation period with a base number in seconds with an optional modifier in dice
export interface IIncubation {
  // the time for the dice roll
  time: number;

  // a dice roll to determine the incubation time
  dice: Dice;
}

// link to a disease object
export interface ILinkDisease extends ILinkResource {}

// disease object
export interface IDisease extends IResource {
  // condition, agent, transmission, disease
  type: DiseaseTypes;
  condition: ConditionTypes;
  pathogen: AgentTypes;
  transmission: TransmissionTypes;

  // incubation period with a base number in seconds with an optional modifier in dice
  incubation: IIncubation;

  // what level of exhaustion does this cause?
  exhaustion: number;

  // what resistance and vulnerability is there
  resistance: DamageTypes;
  vulnerability: DamageTypes;

  // what is the genetic immunity
  immunity: ITrait;

  // effects
  savingThrow: AbilityTypes;
  damage: Dice[];

  // a trigger value for the disease and time in seconds
  trigger: string;
  triggerTime: number;

  // additional properties on the disease
  properties: object;
}

// disease class
export class Disease extends Resource implements IDisease {
  public type = null;
  public condition = null;
  public pathogen = null;
  public transmission = null;
  public incubation = null;
  public exhaustion = 0;
  public resistance = null;
  public vulnerability = null;
  public immunity = null;
  public savingThrow = null;
  public damage = [];
  public trigger = "";
  public triggerTime = null;
  public properties = {};
}
