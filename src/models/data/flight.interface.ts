import {
  FlightTimesInterface,
} from './index';

export interface FlightInterface {
  _id?: string;
  cost: number;
  flightTime: FlightTimesInterface;
}
