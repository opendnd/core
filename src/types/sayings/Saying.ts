import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkSaying extends ILinkResource {}

export interface ISaying extends IResource {}

export class Saying extends Resource implements ISaying {}
