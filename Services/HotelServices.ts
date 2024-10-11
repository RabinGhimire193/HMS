import { Hotel } from '../Models/Hotel';

export class HotelService {
    private hotels: Hotel[] = [];

    addHotel(hotel: Hotel) {
        this.hotels.push(hotel);
    }

    getAllHotels(): Hotel[] {
        return this.hotels;
    }

    findHotelById(id: number): Hotel | undefined {
        return this.hotels.find(hotel => hotel.id === id);
    }
}
