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
  description?: string;
  mainImageUrl: string;
  country: CountryInterface;
  flight: FlightInterface;
  highlights: HolidayHighlightInterface[];
  name: string;
}
