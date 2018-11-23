import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkFeature extends ILinkResource {}

export interface IFeature extends IResource {
  /**
   * Description of the feature
   */
  description: string;
}

export class Feature extends Resource implements IFeature {
  public description = "";
}
