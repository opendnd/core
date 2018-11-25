import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export enum NameTypes {
  Male = "male",
  Female = "female",
  Neuter = "neuter",
  Domain = "domain",
  Dynasty = "dynasty",
}

export interface ILinkName extends ILinkResource {}

export interface IName extends IResource {}

export class Name extends Resource implements IName {}
