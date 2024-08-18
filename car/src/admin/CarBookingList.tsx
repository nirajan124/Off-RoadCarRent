import React, { useEffect, useState } from 'react';
import './CarBookingList.css';

interface Booking {
    id: number;
    carId: string;
    userId: string;
    totalAmount: string;
    rentalStartdateTime: string;
    rentalEnddateTime: string;
}

const CarBookingList: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await fetch('http://localhost:8080/carbooking/all'); // Ensure the URL is correct

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Check if the response is HTML
            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('text/html')) {
                const text = await response.text();
                throw new Error(`Expected JSON but received HTML: ${text}`);
            }

            const data: Booking[] = await response.json();
            setBookings(data);
        } catch (error) {
            console.error('Error fetching bookings:', error);
            // @ts-ignore
            setError(`Failed to fetch bookings. Error: ${error.message}`);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8080/carbooking/all/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Remove the deleted booking from the list
            setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
        } catch (error) {
            console.error('Error deleting booking:', error);
            setError('Failed to delete booking.');
        }
    };

    return (
        <div className="booking-list-container">
            {error && <p>{error}</p>}
            <table className="booking-list-table">
                <thead>
                <tr>
                    <th>Car Id</th>
                    <th>User Id</th>
                    <th>Total Amount</th>
                    <th>Rental Start Date</th>
                    <th>Rental End Date</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {bookings.map((booking) => (
                    <tr key={booking.id}>
                        <td>{booking.carId}</td>
                        <td>{booking.userId}</td>
                        <td>{booking.totalAmount}</td>
                        <td>{booking.rentalStartdateTime}</td>
                        <td>{booking.rentalEnddateTime}</td>
                        <td>
                            <button
                                className="delete-button"
                                onClick={() => handleDelete(booking.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CarBookingList;
