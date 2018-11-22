import { IResourceDict, ILinkResourceDict } from "../../types/core/Core";
import { ILinkFeature, IFeature } from "../../types/features/Feature";

interface ILinkFeatureDict extends ILinkResourceDict {
  [uuid:string]: ILinkFeature;
}

interface IFeatureDict extends IResourceDict {
  [uuid:string]: IFeature;
}

export const features:ILinkFeatureDict = require('./features.json');

export const featuresDict:IFeatureDict = {
  'dnd0050e-1srd-core-0019-f6s000000001': require('./dnd0050e-1srd-core-0019-f6s000000001.json'),
};
