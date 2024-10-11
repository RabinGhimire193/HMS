import { Customer } from "../Models/Customer";
import { Hotel } from "../Models/Hotel";

export interface Booking {
    id: number;
    customer: Customer;
    hotel: Hotel;
    checkInDate: Date;
    checkOutDate: Date;
    status: 'confirmed' | 'canceled' | 'completed';
}
