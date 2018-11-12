import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkTrap extends ILinkResource {}

export interface ITrap extends IResource {}

export class Trap extends Resource implements ITrap {}
