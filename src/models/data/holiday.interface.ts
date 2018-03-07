import {
  ActivityCategoryInterface,
  CountryInterface,
  FlightInterface,
  FoodTypeInterface,
} from './';

export interface HolidayInterface {
  _id?: string;
  activities: ActivityCategoryInterface[];
  activityScore: number;
  country: CountryInterface;
  flight: FlightInterface;
  name: string;
}
