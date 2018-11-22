import { IResourceDict, ILinkResourceDict } from "../../types/core/Core";
import { ILinkKlass, IKlass } from "../../types/klasses/Klass";

interface ILinkKlassDict extends ILinkResourceDict {
  [uuid:string]: ILinkKlass;
}

interface IKlassDict extends IResourceDict {
  [uuid:string]: IKlass;
}

export const klasses:ILinkKlassDict = require('./klasses.json');

export const klassesDict:IKlassDict = {
  'dnd0050e-1srd-core-0019-k5s000000001': require('./dnd0050e-1srd-core-0019-k5s000000001.json'),
  'dnd0050e-1srd-core-0019-k5s000000002': require('./dnd0050e-1srd-core-0019-k5s000000002.json'),
  'dnd0050e-1srd-core-0019-k5s000000003': require('./dnd0050e-1srd-core-0019-k5s000000003.json'),
  'dnd0050e-1srd-core-0019-k5s000000004': require('./dnd0050e-1srd-core-0019-k5s000000004.json'),
  'dnd0050e-1srd-core-0019-k5s000000005': require('./dnd0050e-1srd-core-0019-k5s000000005.json'),
  'dnd0050e-1srd-core-0019-k5s000000006': require('./dnd0050e-1srd-core-0019-k5s000000006.json'),
  'dnd0050e-1srd-core-0019-k5s000000007': require('./dnd0050e-1srd-core-0019-k5s000000007.json'),
  'dnd0050e-1srd-core-0019-k5s000000008': require('./dnd0050e-1srd-core-0019-k5s000000008.json'),
  'dnd0050e-1srd-core-0019-k5s000000009': require('./dnd0050e-1srd-core-0019-k5s000000009.json'),
  'dnd0050e-1srd-core-0019-k5s000000010': require('./dnd0050e-1srd-core-0019-k5s000000010.json'),
  'dnd0050e-1srd-core-0019-k5s000000011': require('./dnd0050e-1srd-core-0019-k5s000000011.json'),
  'dnd0050e-1srd-core-0019-k5s000000012': require('./dnd0050e-1srd-core-0019-k5s000000012.json'),
};
