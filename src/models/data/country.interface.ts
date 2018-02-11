import {
  ContinentInterface,
  FoodTypeInterface,
} from './';

export interface CountryInterface {
  _id?: string;
  continent: ContinentInterface;
  foodTypes: FoodTypeInterface[];
  name: string;
}
