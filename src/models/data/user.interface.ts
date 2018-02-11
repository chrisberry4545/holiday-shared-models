import {
  HolidayInterface,
} from './';

export interface UserInterface {
  _id?: string;
  firstName: string;
  lastName: string;
  savedHolidays: HolidayInterface[];
}
