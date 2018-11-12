import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkDungeon extends ILinkResource {}

export interface IDungeon extends IResource {}

export class Dungeon extends Resource implements IDungeon {}
