import { OrderStatus } from "../../enums/order-status.enum";

export interface ChangeOrderStatusRequestDto {
  orderStatus: OrderStatus;
}
