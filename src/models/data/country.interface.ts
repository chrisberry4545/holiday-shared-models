import {
  ContinentInterface,
} from './';

export interface CountryInterface {
  _id?: string;
  continent: ContinentInterface;
  name: string;
}
