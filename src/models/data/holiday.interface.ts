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
  mainImageUrl: string;
  country: CountryInterface;
  flight: FlightInterface;
  highlights: HolidayHighlightInterface[];
  name: string;
}
