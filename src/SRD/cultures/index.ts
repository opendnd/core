import { IResourceDict, ILinkResourceDict } from "../../types/core/Core";
import { ILinkCulture, ICulture } from "../../types/cultures/Culture";

export interface ILinkCultureDict extends ILinkResourceDict {
  [uuid:string]: ILinkCulture;
}

export interface ICultureDict extends IResourceDict {
  [uuid:string]: ICulture;
}

export const cultures:ILinkCultureDict = require('./cultures.json');

export const culturesDict:ICultureDict = {
  'dnd0050e-1srd-core-0019-c6s000000001': require('./dnd0050e-1srd-core-0019-c6s000000001.json'),
};
