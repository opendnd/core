import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkFamiliar extends ILinkResource {}

export interface IFamiliar extends IResource {}

export class Familiar extends Resource implements IFamiliar {}
