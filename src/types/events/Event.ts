import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkEvent extends ILinkResource {}

export interface IEvent extends IResource {}

export class Event extends Resource implements IEvent {}
