import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";
import { NameTypes } from "../names/Name";

export interface INames {
  /**
   * Male names
   */
  [NameTypes.Male]?: string[];

  /**
   * Female names
   */
  [NameTypes.Female]?: string[];

  /**
   * Neuter names
   */
  [NameTypes.Neuter]?: string[];

  /**
   * Domain names
   */
  [NameTypes.Domain]?: string[];

  /**
   * Dynasty names
   */
  [NameTypes.Dynasty]?: string[];
}

export interface ILinkCulture extends ILinkResource {}

export interface ICulture extends IResource {
  /**
   * A description of the culture
   */
  description: string;

  /**
   * A list of names in this culture
   */
  names: INames;
}

export class Culture extends Resource implements ICulture {
  public description = "";
  public names = {};
}
