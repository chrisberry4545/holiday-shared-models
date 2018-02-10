import {
  ActivityInterface,
  CountryInterface,
  FoodTypeInterface,
} from './';

export interface HolidayInterface {
  activities: ActivityInterface[];
  country: CountryInterface;
  foodTypes: FoodTypeInterface[];
  id: string;
  name: string;
}
