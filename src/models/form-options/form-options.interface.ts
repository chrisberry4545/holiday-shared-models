import {
  ActivityCategoryInterface,
  CostRangeInterface,
  FlightTimesInterface,
  FoodTypeInterface,
  TemperatureInterface,
} from './../';

export interface FormOptionsInterface {
  possibleActivities: ActivityCategoryInterface[];
  possibleCostRanges: CostRangeInterface[];
  possibleFlightTimes: FlightTimesInterface[];
  possibleFoodTypes: FoodTypeInterface[];
  possibleTemperatures: TemperatureInterface[];
}
