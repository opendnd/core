import { 
  IResource,
  ILinkResource,
  Resource,
} from "../core/Core";
import { ILinkItem } from "../items/Item";
import { ILinkPerson } from "../persons/Person";

// the modes of transporation
export enum TransporationModes {
  Animal = "animal",
  Human = "human",
  Land = "land",
  Air = "air",
  Water = "water",
}

// a link to a vehicle
export interface ILinkVehicle extends ILinkResource {
  // personalized nickname for the vehicle
  nickname?: string;
}

export interface IVehicle extends IResource {
  // personalized nickname for the vehicle
  nickname: string;

  // base cost in cp of the vehicle
  cost: number;

  // mode of transport
  mode: TransporationModes;

  // who is controlling the vehicle and riding in it
  controllers: ILinkPerson[];
  passengers: ILinkPerson[];

  // what cargo is the vehicle carrying and what is its current encumberence (weight)
  cargo: ILinkItem[];
  weight: number;
  capacity: number;

  // a base multiplier to derive additional multipliers
  multiplier: number;

  // a base speed value
  speed: number;

  // specific properties can vary differently based on the type
  properties: object;
}

export class Vehicle extends Resource implements IVehicle {
  public nickname = "";
  public cost = 0;
  public mode = null;
  public controllers = [];
  public passengers = [];
  public cargo = [];
  public weight = 0;
  public capacity = 0;
  public multiplier = 0;
  public speed = 0;
  public properties = {};
}
