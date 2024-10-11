"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelService = void 0;
class HotelService {
    constructor() {
        this.hotels = [];
    }
    addHotel(hotel) {
        this.hotels.push(hotel);
    }
    getAllHotels() {
        return this.hotels;
    }
    findHotelById(id) {
        return this.hotels.find(hotel => hotel.id === id);
    }
}
exports.HotelService = HotelService;
