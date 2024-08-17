import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CarCard.css'; // Ensure you create and style this CSS file accordingly

interface Car {
    id: number;
    carBrand: string;
    seat: number;
    price: string;
    carImage: string;
    isBooked: boolean; // Add a new field to track booking status
    rentalEndDateTime: string | null; // Add a field for rental end time
}

interface CarCardProps {
    car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);
    const [isBooked, setIsBooked] = useState(car.isBooked); // Track booking status
    const navigate = useNavigate();

    useEffect(() => {
        if (car.rentalEndDateTime) {
            const endDate = new Date(car.rentalEndDateTime);
            const now = new Date();
            if (now > endDate) {
                setIsBooked(false); // Mark the car as available if the rental period has ended
            }
        }
    }, [car.rentalEndDateTime]);

    const handleCalculateAmount = () => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
            const amount = days * parseFloat(car.price);
            setTotalAmount(amount);
        }
    };

    const handleBookClick = () => {
        const isLoggedIn = localStorage.getItem('userId');

        if (!isLoggedIn) {
            setShowPopup(true);
        } else {
            handleOpenBookingPopup();
        }
    };

    const handleOpenBookingPopup = () => {
        setShowPopup(true);
    };

    const handleConfirmBooking = async () => {
        const userId = localStorage.getItem('userId');
        if (startDate && endDate && userId) {
            const bookingData = {
                carId: car.id,
                rentalStartdateTime: startDate,
                rentalEnddateTime: endDate,
                totalAmount: totalAmount.toString(),
                userId: userId, // Include userId in bookingData
            };

            try {
                const response = await fetch('http://localhost:8080/carbooking/carbook', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bookingData),
                });

                if (response.ok) {
                    alert('Car booked successfully!');
                    setIsBooked(true); // Update the booking status
                } else {
                    alert('Failed to book the car.');
                }
            } catch (error) {
                console.error('Error booking car:', error);
                alert('An error occurred while booking the car.');
            }

            setShowPopup(false);
        }
    };

    const handleRedirectToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="car-card">
            <img src={`data:image/jpeg;base64,${car.carImage}`} alt={`Car ${car.id}`} className="car-image"/>
            <h2 className="car-brand">{car.carBrand}</h2>
            <p className="car-seats">Seats: {car.seat}</p>
            <p className="car-price">Price: {car.price}</p>

            {isBooked ? (
                <button className="booked-button" disabled>Booked</button>
            ) : (
                <button className="book-button" onClick={handleBookClick}>Book</button>
            )}

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        {localStorage.getItem('userId') ? (
                            <>
                                <h3>Book {car.carBrand}</h3>
                                <label>
                                    Start Date:
                                    <input
                                        type="datetime-local"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                </label>
                                <label>
                                    End Date:
                                    <input
                                        type="datetime-local"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        onBlur={handleCalculateAmount}
                                    />
                                </label>
                                {totalAmount > 0 && (
                                    <p>Total Amount: {totalAmount.toFixed(2)}</p>
                                )}
                                <button onClick={handleConfirmBooking}>Confirm Booking</button>
                                <button onClick={() => setShowPopup(false)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <h3>Please login first</h3>
                                <button onClick={handleRedirectToLogin}>Okay</button>
                                <button onClick={() => setShowPopup(false)}>Cancel</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarCard;