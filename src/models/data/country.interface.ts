import {
  ContinentInterface,
  FoodTypeInterface,
  TemperatureInterface,
} from './';

export interface CountryInterface {
  _id?: string;
  continent: ContinentInterface;
  foodScore: number;
  foodTypes: FoodTypeInterface[];
  name: string;
  monthlyTemperatures: { [key: number]: TemperatureInterface };
}
