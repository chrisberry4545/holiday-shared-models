import {
  HolidayInterface,
} from './';

export interface UserInterface {
  id: string;
  firstName: string;
  lastName: string;
  savedHolidays: HolidayInterface[];
}
