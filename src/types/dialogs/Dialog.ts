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
  prompt: number;

  // a list of trigger events for this response
  triggers: string[];

  // information for voice over, emotion, ambience, etc.
  VO: string;
  emotion: string;
  ambience: string;
}

// prompts are used to prompt the user with choices to interact with the character
export interface IPrompt {
  choices: IChoice[];
}
export interface IChoice {
  // the text displayed to the player
  text: string;

  // the next response index for this choice
  response: number;

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
  currentResponse: number;

  // a list of responses
  responses: IResponse[];

  // a list of prompts
  prompts: IPrompt[];
}

export class Dialog extends Resource implements IDialog {
  public currentResponse = 0;
  public responses = [];
  public prompts = [];
}
