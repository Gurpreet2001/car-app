import { OrderStatus } from "../enums/order-status.enum";

export interface Order {
  id: number;
  userId: number;
  carId: number;
  createdAt: Date;
  orderStatus: OrderStatus;
}
