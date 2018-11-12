import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkLanguage extends ILinkResource {}

export interface ILanguage extends IResource {}

export class Language extends Resource implements ILanguage {}
