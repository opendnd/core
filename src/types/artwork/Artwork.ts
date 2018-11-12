import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkArtwork extends ILinkResource {}

export interface IArtwork extends IResource {}

export class Artwork extends Resource implements IArtwork {}