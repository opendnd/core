import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkDynasty extends ILinkResource {}

export interface IDynasty extends IResource {}

export class Dynasty extends Resource implements IDynasty {}
