import {
  ContinentInterface,
  FoodTypeInterface,
  TemperatureInterface,
} from './';

export interface CountryInterface {
  _id?: string;
  continent: ContinentInterface;
  foodTypes: FoodTypeInterface[];
  name: string;
  monthlyTemperatures: { [key: number]: TemperatureInterface };
}
