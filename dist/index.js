"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HotelServices_1 = require("./Services/HotelServices");
const BookingServices_1 = require("./Services/BookingServices");
// Initialize services
const hotelService = new HotelServices_1.HotelService();
const bookingService = new BookingServices_1.BookingService();
// Adding hotels
hotelService.addHotel({ id: 1, name: 'Hotel Paradise', location: 'New York', roomsAvailable: 10, rating: 4.5 });
hotelService.addHotel({ id: 2, name: 'Ocean View', location: 'Miami', roomsAvailable: 5, rating: 4.7 });
// Adding customers
const customer = { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' };
// Creating a booking
const booking = {
    id: 1,
    customer: customer,
    hotel: hotelService.findHotelById(1),
    checkInDate: new Date('2024-10-15'),
    checkOutDate: new Date('2024-10-20'),
    status: 'confirmed',
};
// Adding the booking
bookingService.addBooking(booking);
// Display all hotels
console.log('Available Hotels:', hotelService.getAllHotels());
// Display all bookings
console.log('Bookings:', bookingService.getAllBookings());
