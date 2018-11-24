import { IResourceDict, ILinkResourceDict } from "../../types/core/Core";
import { ILinkRace, IRace } from "../../types/races/Race";

export interface ILinkRaceDict extends ILinkResourceDict {
  [uuid:string]: ILinkRace;
}

export interface IRaceDict extends IResourceDict {
  [uuid:string]: IRace;
}

export const races:ILinkRaceDict = require('./races.json');

export const racesDict:IRaceDict = {
  'dnd0050e-1srd-core-0019-r3s000000001': require('./dnd0050e-1srd-core-0019-r3s000000001.json'),
  'dnd0050e-1srd-core-0019-r3s000000002': require('./dnd0050e-1srd-core-0019-r3s000000002.json'),
  'dnd0050e-1srd-core-0019-r3s000000003': require('./dnd0050e-1srd-core-0019-r3s000000003.json'),
  'dnd0050e-1srd-core-0019-r3s000000004': require('./dnd0050e-1srd-core-0019-r3s000000004.json'),
  'dnd0050e-1srd-core-0019-r3s000000005': require('./dnd0050e-1srd-core-0019-r3s000000005.json'),
  'dnd0050e-1srd-core-0019-r3s000000006': require('./dnd0050e-1srd-core-0019-r3s000000006.json'),
  'dnd0050e-1srd-core-0019-r3s000000007': require('./dnd0050e-1srd-core-0019-r3s000000007.json'),
  'dnd0050e-1srd-core-0019-r3s000000008': require('./dnd0050e-1srd-core-0019-r3s000000008.json'),
  'dnd0050e-1srd-core-0019-r3s000000009': require('./dnd0050e-1srd-core-0019-r3s000000009.json'),
};
