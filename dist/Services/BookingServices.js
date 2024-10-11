"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
class BookingService {
    constructor() {
        this.bookings = [];
    }
    addBooking(booking) {
        this.bookings.push(booking);
    }
    getAllBookings() {
        return this.bookings;
    }
}
exports.BookingService = BookingService;
