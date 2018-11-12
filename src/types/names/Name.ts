import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkName extends ILinkResource {}

export interface IName extends IResource {}

export class Name extends Resource implements IName {}
