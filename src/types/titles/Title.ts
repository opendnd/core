import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkTitle extends ILinkResource {}

export interface ITitle extends IResource {}

export class Title extends Resource implements ITitle {}
