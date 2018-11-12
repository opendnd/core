import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkMonster extends ILinkResource {}

export interface IMonster extends IResource {}

export class Monster extends Resource implements IMonster {}
