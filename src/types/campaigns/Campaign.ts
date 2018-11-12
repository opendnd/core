import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkCampaign extends ILinkResource {}

export interface ICampaign extends IResource {}

export class Campaign extends Resource implements ICampaign {}
