import { FuelType } from "../enums/fuel-type.enum";
import { PropulsionType } from "../enums/propulsion-type.enum";
import { TransmissionType } from "../enums/transmission-type.enum";

export interface Car {
  id: number;
  brand: string;
  name: string;
  mileage: number;
  fuel: FuelType;
  horsepower: number;
  wheelPropulsion: PropulsionType;
  price: number;
  description: string;
  transmission: TransmissionType;
  year: Date;
  imageUrl: string;
}
