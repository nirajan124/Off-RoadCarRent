import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from './CarCard'; // Adjust the path according to your file structure
import './CarAll.css'; // Ensure you create and style this CSS file accordingly

interface Car {
    id: number;
    carBrand: string;
    seat: number;
    price: string;
    carImage: string;
}

const CarAll: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get('http://localhost:8080/cars/addlist');
                setCars(response.data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars();
    }, []);

    const handleBook = (carId: number) => {
        // Implement booking logic here
        console.log(`Car ${carId} booked`);
    };

    return (
        <div className="car-all-container">
            <h1>Cars Available in Kathmandu</h1>
            <div className="car-list">
                {cars.map((car) => (
                    <CarCard key={car.id} car={car} onBook={handleBook} />
                ))}
            </div>
        </div>
    );
};

export default CarAll;
