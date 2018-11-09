import { ILinkItem } from "../items/Item";
import { ILinkPerson } from "../persons/Person";

// the modes of transporation
export enum TransporationModes {
  Animal,
  Human,
  Land,
  Air,
  Water,
}

// a link to a vehicle
export interface ILinkVehicle {
  // uuid for this object
  uuid: string;

  // name of the vehicle
  name: string;

  // personalized nickname for the vehicle
  nickname: string;
}

export interface IVehicle {
  // uuid for this object
  uuid: string;

  // name for the vehicle
  name: string;

  // personalized nickname for the vehicle
  nickname: string;

  // base cost in cp of the vehicle
  cost: number;

  // mode of transport
  mode: TransporationModes;

  // is it an abstract concept like a template for a vehicle?
  abstract: boolean;
  abstractProperties: object;

  // derived source or template this vehicle was based on
  derivation: ILinkVehicle;

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

  // special notes for the vehicle
  notes: string;

  // specific properties can vary differently based on the type
  properties: object;
}
