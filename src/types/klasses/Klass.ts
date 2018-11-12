import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkKlass extends ILinkResource {}

export interface IKlass extends IResource {}

export class Klass extends Resource implements IKlass {}
