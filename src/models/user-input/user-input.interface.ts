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
  selectedMonthNumber: number;
  selectedTemperatureId?: string;
}
