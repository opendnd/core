import { IResourceDict, ILinkResourceDict } from "../../types/core/Core";
import { IBackground, ILinkBackground } from "../../types/backgrounds/Background";

export interface ILinkBackgroundDict extends ILinkResourceDict {
  [uuid:string]: ILinkBackground;
}

export interface IBackgroundDict extends IResourceDict {
  [uuid:string]: IBackground;
}

export const backgrounds:ILinkBackgroundDict = require('./backgrounds.json');

export const backgroundsDict:IBackgroundDict = {
  'dnd0050e-1srd-core-0019-b9s000000001': require('./dnd0050e-1srd-core-0019-b9s000000001.json'),
};
