import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkEncounter extends ILinkResource {}

export interface IEncounter extends IResource {}

export class Encounter extends Resource implements IEncounter {}
