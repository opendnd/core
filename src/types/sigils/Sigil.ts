import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkSigil extends ILinkResource {}

export interface ISigil extends IResource {}

export class Sigil extends Resource implements ISigil {}
