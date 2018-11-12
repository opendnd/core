import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkBuilding extends ILinkResource {}

export interface IBuilding extends IResource {}

export class Building extends Resource implements IBuilding {}
