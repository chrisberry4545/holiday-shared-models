import {
  ContinentInterface,
  FoodTypeInterface,
  LatLongInterface,
  TemperatureInterface,
} from './';

export interface CountryInterface {
  _id?: string;
  continent: ContinentInterface;
  foodScore: number;
  foodTypes: FoodTypeInterface[];
  latLng: LatLongInterface;
  name: string;
  monthlyTemperatures: { [key: number]: TemperatureInterface };
}
