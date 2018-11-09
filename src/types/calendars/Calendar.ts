export interface ILinkDate {
  // uuid for this object
  uuid: string;

  // text output for the date
  text: string;
}

export interface IDate {
  // uuid for this object
  uuid: string;

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

export interface ILinkCalendar {
  // uuid for this object
  uuid: string;
}

export interface ICalendar {
  // uuid for this object
  uuid: string;
}
