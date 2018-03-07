export interface UserInputInterface {
  howImportantAreActivities: number;
  howImportantAreCosts: number;
  howImportantAreFlightTimes: number;
  howImportantIsFood: number;
  howImportantIsTemperature: number;

  selectedActivityTypeIds?: string[];
  selectedCostRangeId?: string;
  selectedFoodTypeIds?: string[];
  selectedFlightTimeId: string;
  selectedTemperatureId?: string;
}
