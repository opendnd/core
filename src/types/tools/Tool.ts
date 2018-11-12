import { 
  IResource,
  ILinkResource,
  Resource
} from "../core/Core";

export interface ILinkTool extends ILinkResource {}

export interface ITool extends IResource {}

export class Tool extends Resource implements ITool {}
