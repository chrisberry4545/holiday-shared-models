import {
  ActivityCategoryInterface,
  CountryInterface,
  FlightInterface,
  FoodTypeInterface,
  HolidayHighlightInterface,
} from './';

export interface HolidayInterface {
  _id?: string;
  activities: ActivityCategoryInterface[];
  country: CountryInterface;
  flight: FlightInterface;
  highlights: HolidayHighlightInterface[];
  name: string;
}
