export type Order = "asc" | "desc";

export interface Data {
  id: number;
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

export enum ColumnData {
  Id = "id",
  Calories = "calories",
  Carbs = "carbs",
  Fat = "fat",
  Name = "name",
  Protein = "protein",
}

export function createData(
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return { id, name, calories, fat, carbs, protein };
}
export const rows = [
  createData(1, "a", 305, 3.7, 67, 4.3),
  createData(2, "b", 452, 25.0, 51, 4.9),
  createData(3, "c", 262, 16.0, 24, 6.0),
  createData(4, "d", 159, 6.0, 24, 4.0),
  createData(5, "e", 356, 16.0, 49, 3.9),
  createData(6, "f", 408, 3.2, 87, 6.5),
  createData(7, "i", 237, 9.0, 37, 4.3),
  createData(8, "k", 375, 0.0, 94, 0.0),
  createData(9, "l", 518, 26.0, 65, 7.0),
  createData(10, "m", 392, 0.2, 98, 0.0),
  createData(11, "n", 318, 0, 81, 2.0),
  createData(12, "x", 360, 19.0, 9, 37.0),
  createData(13, "y", 437, 18.0, 63, 4.0),
];
