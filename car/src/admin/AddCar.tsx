import React, { useState } from 'react';
import axios from 'axios';
import './AddCar.css';

interface AddCarModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddCarModal: React.FC<AddCarModalProps> = ({ isOpen, onClose }) => {
    const [carBrand, setCarBrand] = useState('');
    const [seat, setSeats] = useState<number | ''>('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('carBrand', carBrand);
        formData.append('seat', String(seat));
        formData.append('price', price);
        if (image) {
            formData.append('carImage', image);
        }

        try {
            const response = await axios.post('http://localhost:8080/cars/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response)
            setShowPopup(true); // Show success popup
            setTimeout(() => {
                setShowPopup(false);
                onClose(); // Close the modal after hiding the popup
            }, 2000); // Hide popup after 3 seconds
        } catch (error) {
            console.error('Error adding car:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>Add New Car</h2>
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
                        <label htmlFor="seat">Seats:</label>
                        <input
                            type="number"
                            id="seat"
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
                            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Add Car</button>
                </form>
            </div>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <p>Car added successfully!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddCarModal;
