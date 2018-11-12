import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkQuest extends ILinkResource {}

export interface IQuest extends IResource {}

export class Quest extends Resource implements IQuest {}
