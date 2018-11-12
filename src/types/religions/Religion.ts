import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkReligion extends ILinkResource {}

export interface IReligion extends IResource {}

export class Religion extends Resource implements IReligion {}
