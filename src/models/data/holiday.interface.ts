import {
  ActivityInterface,
  CountryInterface,
  FoodTypeInterface,
} from './';

export interface HolidayInterface {
  _id?: string;
  activities: ActivityInterface[];
  country: CountryInterface;
  foodTypes: FoodTypeInterface[];
  name: string;
}
