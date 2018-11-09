import { ILinkRace } from "../races/Race";

// sizes available for creatures
export enum Sizes {
  Fine, // 1/2 x 1/2 ft.
  Diminutive, // 1 x 1 ft.
  Tiny, // 2-1/2 x 2-1/2 ft.
  Small, // 5 x 5 ft.
  Medium, // 5 x 5 ft.
  Large, // 10 x 10 ft.
  Huge, // 15 x 15 ft.
  Gargantuan, // 20 x 20 ft.
  Colossal, // 30 x 30 ft.
}

// genders available for creatures
export enum Genders {
  Male,
  Female,
  Neuter,
}

// Traits include informatin on the gene and the identified trait
export interface ITrait {
  // identifies the legend in the DNA, which chromosome and the rule for the trait
  // ex: eye-color:C2:10
  gene: string;

  // the identified trait
  // ex: brown
  trait: string;
}

// the available trait categories
export interface ITraits {
  // general traits include information about the body like shape
  general?: ITrait;

  // eye color
  eyeColor?: ITrait;

  // general information about the hair like shape, style, etc.
  hairGeneral?: ITrait;

  // hair color
  hairColor?: ITrait;

  // general information about the skin like texture
  skinGeneral?: ITrait;

  // skin color
  skinColor?: ITrait;

  // eye shape
  eyeShape?: ITrait;

  // face shape
  faceShape?: ITrait;

  // nose
  faceNose?: ITrait;

  // facial hair
  hairFacial?: ITrait;

  // mouth
  faceMouth?: ITrait;

  // eye brows
  eyeBrows?: ITrait;

  // this includes information about how the skin ages like texture
  skinAging?: ITrait;
}

// the available chromosomes
export interface IChromosomes {
  1?: string;
  2?: string;
  3?: string;
  4?: string;
  5?: string;
  6?: string;
  7?: string;
  8?: string;
  9?: string;
  10?: string;
  11?: string;
  12?: string;
  13?: string;
  14?: string;
  15?: string;
  16?: string;
  17?: string;
  18?: string;
  19?: string;
  20?: string;
  21?: string;
  22?: string;
  23?: string;
  24?: string;
  25?: string;
  26?: string;
  27?: string;
  28?: string;
  29?: string;
  30?: string;
  31?: string;
  32?: string;
}

// link to a DNA
export interface ILinkDNA {
  // uuid for this object
  uuid: string;
}

// DNA is used to form the makeup of a creature at a genetic level
export interface IDNA {
  // version number from genetica
  version: string;

  // uuid for this object
  uuid: string;

  // size of the creature
  size: Sizes;

  // is this an abstract concept of a DNA set like a template?
  abstract: boolean;
  abstractProperties: object;

  // derived source or template this DNA was based on
  derivation: ILinkDNA;

  // race of the creature
  race: ILinkRace;

  // gender of the creature
  gender: Genders;

  // the height of the creature in inches
  height: number;

  // the weight of the creature in pounds
  weight: number;

  // the list of traits for the creature
  traits: ITraits;

  // chromosomes have the dice rolls for each chromosome pair
  // not all races have 32 chromosomes, that is the maximum
  // regular pair ex: 1=6
  // sex chromosome pair ex: X1=Y2
  chromosomes: IChromosomes;

  // notes as it relates to the backstory, campaign, etc.
  notes: string;
}

export class DNA implements IDNA {
  public version = "";
  public uuid = "";
  public size = null;
  public abstract = false;
  public abstractProperties = {};
  public derivation = null;
  public race = null;
  public gender = null;
  public height = 0;
  public weight = 0;
  public traits = {};
  public chromosomes = {};
  public notes = "";

  // create template DNA
  constructor(
    version: string,
    uuid: string,
    size: Sizes,
    abstract: boolean,
    abstractProperties: object,
    derivation: ILinkDNA,
    race: ILinkRace,
    gender: Genders,
    height: number,
    weight: number,
    traits: ITraits,
    chromosomes: IChromosomes,
    notes: string,
  ) {
    this.version = version;
    this.uuid = uuid;
    this.size = size;
    this.abstract = abstract;
    this.abstractProperties = abstractProperties;
    this.derivation = derivation;
    this.race = race;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.traits = traits;
    this.chromosomes = chromosomes;
    this.notes = notes;
  }
}
