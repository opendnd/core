import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkFaction extends ILinkResource {}

export interface IFaction extends IResource {}

export class Faction extends Resource implements IFaction {}
