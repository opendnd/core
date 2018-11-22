import { 
  SkillTypes,
  IResource,
  ILinkResource,
  Resource,
  ITreasury,
} from "../core/Core";
import { ILinkFeature } from "../features/Feature";
import { ILinkItem } from "../items/Item";
import { ILinkLanguage } from "../languages/Language";
import { ILinkTool } from "../tools/Tool";
import { TransporationModes } from "../vehicles/Vehicle";

export interface IIdeals {
  any?: string[];
  good?: string[];
  moral?: string[];
  impure?: string[];
  evil?: string[];
  neutral?: string[];
  chaotic?: string[];
  rebel?: string[];
  social?: string[];
  lawful?: string[];
}

export interface ILinkBackground extends ILinkResource {}

export interface IBackground extends IResource {
  /**
   * Description provides a detailed overview to the player on this background 
   */
  description: string

  /**
   * A list of specialties available for this background 
   */
  specialties: string[];

  /**
   * A list of personality trait options
   */ 
  personalityTraits: string[];

  /**
   * A list of ideals by alignment x & y options
   */
  ideals: IIdeals;

  /**
   * A list of bonds
   */
  bonds: string[];

  /**
   * A list of flaws
   */
  flaws: string[];

  /**
   * Starting treasury
   */
  treasury: ITreasury;

  /**
   * A list of starting equipment @link:ILinkItem[]
   */
  equipment?: ILinkItem[]

  /**
   * A list of proficiencies
   */
  proficiencies: {
    /**
     * a list of skills with proficiency
     */
    skills?: SkillTypes[]

    /**
     * a list of transportation modes with proficiency
     */
    transportation?: TransporationModes[]

    /**
     * a list of languages with proficiency @link:ILinkLanguage[]
     */
    languages?: ILinkLanguage[]

    /**
     * a list of tools with proficiency @link:ILinkTool[]
     */
    tools?: ILinkTool[]

    /**
     * a number of tools you may become proficient in with this background
     */
    selectTools?: number

    /**
     * a number of languages you may learn from this background
     */
    selectLanguages?: number,
  };

  /** 
   * a list of features for this background @link:ILinkFeature[]
   */
  features: ILinkFeature[];
}

export class Background extends Resource implements IBackground {
  public description = "";
  public specialties = [];
  public personalityTraits = [];
  public ideals = {};
  public bonds = [];
  public flaws = [];
  public equipment = [];
  public treasury = {};
  public proficiencies = {};
  public features = [];
}
