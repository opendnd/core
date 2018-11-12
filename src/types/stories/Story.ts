import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkStory extends ILinkResource {}

export interface IStory extends IResource {}

export class Story extends Resource implements IStory {}
