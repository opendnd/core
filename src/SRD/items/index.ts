import { IResourceDict, ILinkResourceDict } from "../../types/core/Core";
import { ILinkItem, IItem } from "../../types/items/Item";

export interface ILinkItemDict extends ILinkResourceDict {
  [uuid:string]: ILinkItem;
}

export interface IItemDict extends IResourceDict {
  [uuid:string]: IItem;
}

export const items:ILinkItemDict = require('./items.json');

export const itemsDict:IItemDict = {
  'dnd0050e-1srd-core-0019-i2s000000001': require('./dnd0050e-1srd-core-0019-i2s000000001.json'),
  'dnd0050e-1srd-core-0019-i2s000000002': require('./dnd0050e-1srd-core-0019-i2s000000002.json'),
  'dnd0050e-1srd-core-0019-i2s000000003': require('./dnd0050e-1srd-core-0019-i2s000000003.json'),
  'dnd0050e-1srd-core-0019-i2s000000004': require('./dnd0050e-1srd-core-0019-i2s000000004.json'),
  'dnd0050e-1srd-core-0019-i2s000000005': require('./dnd0050e-1srd-core-0019-i2s000000005.json'),
  'dnd0050e-1srd-core-0019-i2s000000006': require('./dnd0050e-1srd-core-0019-i2s000000006.json'),
};
