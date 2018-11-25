import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";
import { ILinkDomain } from "../domains/Domain";
import { ILinkDate } from "../calendars/Calendar";

export enum EventTypes {
  Birth = "birth",
  Death = "death",
  Marriage = "marriage",
  Founding = "founding",
  Annulment = "annulment",
  Other = "other",
}

export interface ILinkEvent extends ILinkResource {
  /**
   * A shorthand of the date (name value)
   */
  date: string;

  /**
   * Event type
   */
  type: EventTypes;
}

export interface IEvent extends IResource {
  /** 
   * Type of event
   */
  type: EventTypes;

  /** 
   * description of the event
   */
  description?: string;

  /** 
   * location of the event @link:ILinkDomain
   */
  domain?: ILinkDomain;

  /** 
   * date of the event @link:ILinkDate
   */
  date?: ILinkDate
}

export class Event extends Resource implements IEvent {
  public type = EventTypes.Other;
}
