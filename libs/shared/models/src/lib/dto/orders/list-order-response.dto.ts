import { OrderStatus } from "../../enums/order-status.enum";
import { ListItemCarResponseDto } from "../cars/list-car-response.dto";

export interface ListItemOrdersDto {
  id: number;
  userId: number;
  car: ListItemCarResponseDto;
  createdAt: Date;
  orderStatus: OrderStatus;
}
