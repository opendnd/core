import { SkillTypes } from "../core/Core";
import { ILinkFeature } from "../features/Feature";
import { ILinkItem } from "../items/Item";
import { ILinkLanguage } from "../languages/Language";
import { ILinkTool } from "../tools/Tool";
import { TransporationModes } from "../vehicles/Vehicle";

export interface ILinkBackground {
  // uuid for this object
  uuid: string;
}

export interface IBackground {
  // uuid for this object
  uuid: string;

  // uuid for this object
  version: string;

  // a list of specialties available for this background
  specialties: string[];

  // a list of personality trait options
  personalityTraits: string[];

  // a list of ideals by alignment x & y options
  ideals: {
    any?: string[]
    good?: string[]
    moral?: string[]
    impure?: string[]
    evil?: string[]
    neutral?: string[]
    chaotic?: string[]
    rebel?: string[]
    social?: string[]
    lawful?: string[],
  };

  // a list of bonds
  bonds: string[];

  // a list of flaws
  flaws: string[];

  // list of proficiencies
  proficiencies: {
    // a list of skills with proficiency
    skills?: SkillTypes[]

    // a list of transportation modes with proficiency
    transportation?: TransporationModes[]

    // a list of languages with proficiency
    languages?: ILinkLanguage[]

    // a list of starting equipment
    items?: ILinkItem[]

    // a list of tools with proficiency
    tools?: ILinkTool[]

    // a number of tools you may become proficient in with this background
    selectTools?: number

    // a number of languages you may learn from this background
    selectLanguages?: number,
  };

  // a list of features for this background
  features: ILinkFeature[];
}

export class Background implements IBackground {
  public version = "";
  public uuid = "";
  public specialties = [];
  public personalityTraits = [];
  public ideals = {};
  public bonds = [];
  public flaws = [];
  public proficiencies = {};
  public features = [];
}
