import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkDomain extends ILinkResource {}

export interface IDomain extends IResource {}

export class Domain extends Resource implements IDomain {}
