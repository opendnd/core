import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkFeature extends ILinkResource {}

export interface IFeature extends IResource {}

export class Feature extends Resource implements IFeature {}
