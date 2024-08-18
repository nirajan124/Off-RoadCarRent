import React from 'react';
import './CarCard.css'; // Ensure you create and style this CSS file accordingly

interface CarCardProps {
    car: {
        id: number;
        carBrand: string;
        seat: number;
        price: string;
        carImage: string;
        isBooked: boolean;
        rentalEndDateTime: string;
    };
    onBook: (carId: number) => void; // Ensure this is typed correctly
}

const CarCard: React.FC<CarCardProps> = ({ car, onBook }) => {
    return (
        <div className="car-card">
            <img src={car.carImage} alt={`${car.carBrand} image`} className="car-image" />
            <h2>{car.carBrand}</h2>
            <p>Seats: {car.seat}</p>
            <p>Price: {car.price}</p>
            <p>Status: {car.isBooked ? 'Booked' : 'Available'}</p>
            <p>Rental End: {car.rentalEndDateTime}</p>
            <button onClick={() => onBook(car.id)} disabled={car.isBooked}>
                {car.isBooked ? 'Booked' : 'Book Now'}
            </button>
        </div>
    );
};

export default CarCard;
