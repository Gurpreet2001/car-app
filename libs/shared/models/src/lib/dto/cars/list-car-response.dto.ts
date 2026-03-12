import { FuelType } from "../../enums/fuel-type.enum";

export interface ListItemCarResponseDto {
  id: number;
  brand: string;
  name: string;
  mileage: number;
  fuel: FuelType;
  horsepower: number;
  price: number;
  year: Date;
  imageUrl: string;
}
