import {
  ContinentInterface,
  CountryFactInterface,
  FoodTypeInterface,
  TemperatureInterface,
} from './';

export interface CountryInterface {
  _id?: string;
  continent: ContinentInterface;
  facts: CountryFactInterface[];
  foodScore: number;
  foodTypes: FoodTypeInterface[];
  name: string;
  monthlyTemperatures: { [key: number]: TemperatureInterface };
}
