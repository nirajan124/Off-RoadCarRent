import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditCar.css';

interface EditCarModalProps {
    isOpen: boolean;
    onClose: () => void;
    car: { id: number; carBrand: string; seat: number; price: string; carImage: string } | null;
    onSave: (updatedCar: { id: number; carBrand: string; seat: number; price: string; carImage: string }) => void;
}

const EditCarModal: React.FC<EditCarModalProps> = ({ isOpen, onClose, car, onSave }) => {
    const [carBrand, setCarBrand] = useState('');
    const [seat, setSeats] = useState<number | ''>('');
    const [price, setPrice] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        if (car) {
            setCarBrand(car.carBrand);
            setSeats(car.seat);
            setPrice(car.price);
        }
    }, [car]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setImageFile(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (car) {
            try {
                const formData = new FormData();
                formData.append('carBrand', carBrand);
                formData.append('seat', seat.toString());
                formData.append('price', price);

                // Append the image file if it was selected
                if (imageFile) {
                    formData.append('carImage', imageFile);
                }

                // Make the PUT request to update the car
                const response = await axios.put(`http://localhost:8080/cars/car/${car.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log('Response:', response);

                // Update the car object and pass it back via onSave
                const updatedCar = {
                    ...car,
                    carBrand,
                    seat,
                    price,
                    carImage: imageFile ? URL.createObjectURL(imageFile) : car.carImage,
                };

                // @ts-ignore
                onSave(updatedCar);
                onClose();
            } catch (error) {
                // @ts-ignore
                console.error('Error updating car:', error.response?.data || error.message);
            }
        }
    };

    if (!isOpen || !car) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>Edit Car</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="carBrand">Car Brand:</label>
                        <input
                            type="text"
                            id="carBrand"
                            value={carBrand}
                            onChange={(e) => setCarBrand(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="seats">Seats:</label>
                        <input
                            type="number"
                            id="seats"
                            value={seat}
                            onChange={(e) => setSeats(Number(e.target.value))}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="text"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Car Image:</label>
                        <input
                            type="file"
                            id="image"
                            onChange={handleFileChange}
                        />
                    </div>
                    <button type="submit" className="submit-button">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default EditCarModal;

