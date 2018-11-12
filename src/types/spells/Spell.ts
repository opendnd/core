import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkSpell extends ILinkResource {}

export interface ISpell extends IResource {}

export class Spell extends Resource implements ISpell {}
