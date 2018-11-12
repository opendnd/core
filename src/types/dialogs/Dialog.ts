import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";

export interface ILinkDialog extends ILinkResource {}

// a response is for the non-playable character to respond to something (or start talking)
export interface IResponse {
  // the spoken text to the player
  text: string;

  // the prompts index available for this response
  prompts: string;

  // a list of trigger events for this response
  triggers: string[];

  // information for voice over, emotion, ambience, etc.
  VO: string;
  emotion: string;
  ambience: string;
}

// prompts are used to prompt the user with choices to interact with the character
export interface IPrompts {
  choices: IChoice[];
}
export interface IChoice {
  // the text displayed to the player
  text: string;

  // the next response index for this choice
  response: string;

  // a requirement is which technical requirement the player must have to use this choice
  requirement: {};

  // a list of trigger events for this response
  triggers: string[];

  // information for voice over, emotion, ambience, etc.
  VO: string;
  emotion: string;
  ambience: string;
}

export interface IDialog extends IResource {
  // current prompts for the player to choose
  currentPrompts: string;

  // current response from the character
  currentResponse: string;

  // a list of responses
  responses: IResponse[];

  // a list of prompts
  prompts: IPrompts[];
}

export class Dialog extends Resource implements IDialog {
  public currentPrompts = "";
  public currentResponse = "";
  public responses = [];
  public prompts = [];
}
