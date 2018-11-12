import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkCulture extends ILinkResource {}

export interface ICulture extends IResource {}

export class Culture extends Resource implements ICulture {}
