import { Booking } from '../models/Booking';

export class BookingService {
    private bookings: Booking[] = [];

    addBooking(booking: Booking) {
        this.bookings.push(booking);
    }

    getAllBookings(): Booking[] {
        return this.bookings;
    }
}
