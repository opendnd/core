import { IResourceDict, ILinkResourceDict } from "../../types/core/Core";
import { ILinkCulture, ICulture } from "../../types/cultures/Culture";

interface ILinkCultureDict extends ILinkResourceDict {
  [uuid:string]: ILinkCulture;
}

interface ICultureDict extends IResourceDict {
  [uuid:string]: ICulture;
}

export const cultures:ILinkCultureDict = require('./cultures.json');

export const culturesDict:ICultureDict = {};
