import {
  ActivityCategoryInterface,
  CostRangeInterface,
  FlightTimesInterface,
  FoodImportanceInterface,
  TemperatureInterface,
} from './../';

export interface FormOptionsInterface {
  possibleActivities: ActivityCategoryInterface[];
  possibleCostRanges: CostRangeInterface[];
  possibleFlightTimes: FlightTimesInterface[];
  possibleFoodImportantOptions: FoodImportanceInterface[];
  possibleTemperatures: TemperatureInterface[];
}
