import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkDate extends ILinkResource {}

export interface IDate extends IResource {
  // a reference to the calendar being used for this date
  calendar: ILinkCalendar;

  // a numerical representation of the value (seconds from epoch)
  value: number;

  epoch: number; // era
  solar: number; // year
  lunar: number; // month
  planetary: number; // day
  hora: number; // hour
  prima: number; // minute
  secunda: number; // second
}

export class Date extends Resource implements IDate {
  public calendar = null;
  public value = 0;
  public epoch = 0;
  public solar = 0;
  public lunar = 0;
  public planetary = 0;
  public hora = 0;
  public prima = 0;
  public secunda = 0;
}

export interface ILinkCalendar extends ILinkResource {}

export interface ICalendar extends IResource {}

export class Calendar extends Resource implements ICalendar {}
