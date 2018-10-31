import { SkillTypes } from '../core/Core';
import { TransporationModes } from '../vehicles/Vehicle';
import { LinkItem } from '../items/Item';
import { LinkLanguage } from '../languages/Language';
import { LinkTool } from '../tools/Tool';
import { LinkFeature } from '../features/Feature';

export interface LinkBackground {
  // uuid for this object
  uuid: string
}

export interface Background {
  // uuid for this object
  version: string

  // uuid for this object
  uuid: string

  // a list of specialties available for this background
  specialties: string[]

  // a list of personality trait options
  personalityTraits: string[]

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
    lawful?: string[]
  }

  // a list of bonds
  bonds: string[]

  // a list of flaws
  flaws: string[]

  // list of proficiencies
  proficiencies: {
    // a list of skills with proficiency
    skills?: SkillTypes[]

    // a list of transportation modes with proficiency
    transportation?: TransporationModes[]

    // a list of languages with proficiency
    languages?: LinkLanguage[]

    // a list of starting equipment
    items?: LinkItem[]

    // a list of tools with proficiency
    tools?: LinkTool[]

    // a number of tools you may become proficient in with this background
    selectTools?: number

    // a number of languages you may learn from this background
    selectLanguages?: number
  }

  // a list of features for this background
  features: LinkFeature[]
}

export class TplBackground implements Background {
  version = ''
  uuid = ''
  specialties = []
  personalityTraits = []
  ideals = {}
  bonds = []
  flaws = []
  proficiencies = {}
  features = []
}
