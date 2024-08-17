import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CarList.css'; // Create and style this CSS file accordingly
import AddCarModal from './AddCar'; // Adjust the path according to your file structure
import EditCarModal from './EditCar'; // Adjust the path according to your file structure

interface Car {
    id: number;
    carBrand: string;
    seat: number;
    price: string;
    carImage: string; // Base64 encoded image string
}

const CarList: React.FC = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedCarIndex, setSelectedCarIndex] = useState<number | null>(null);
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

    const openAddModal = () => setIsAddModalOpen(true);
    const closeAddModal = () => setIsAddModalOpen(false);
    const openEditModal = (index: number) => {
        setSelectedCarIndex(index);
        setIsEditModalOpen(true);
    };
    const closeEditModal = () => setIsEditModalOpen(false);

    const handleEditSave = (updatedCar: Car) => {
        if (selectedCarIndex !== null) {
            const updatedCars = [...cars];
            updatedCars[selectedCarIndex] = updatedCar;
            setCars(updatedCars);
        }
    };

    const handleDelete = async (index: number) => {
        const carToDelete = cars[index];
        try {
            await axios.delete(`http://localhost:8080/cars/addlist/${carToDelete.id}`);
            const updatedCars = cars.filter((_, i) => i !== index);
            setCars(updatedCars);
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    };

    return (
        <div className="car-list-container">
            <button className="add-car-button" onClick={openAddModal}>Add Car</button>
            <table className="car-list-table">
                <thead>
                <tr>
                    <th>Car ID</th>
                    <th>Car Image</th>
                    <th>Car Brand</th>
                    <th>Seat</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {cars.map((car, index) => (
                    <tr key={car.id}>
                        <td>{car.id}</td>
                        <td>
                            <img src={`data:image/jpeg;base64,${car.carImage}`} alt={`Car ${index}`} className="car-image" />
                        </td>
                        <td>{car.carBrand}</td>
                        <td>{car.seat}</td>
                        <td>{car.price}</td>
                        <td>
                            <button className="action-button edit-button" onClick={() => openEditModal(index)}>Edit</button>
                            <button className="action-button delete-button" onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <AddCarModal isOpen={isAddModalOpen} onClose={closeAddModal} />
            {selectedCarIndex !== null && (
                <EditCarModal
                    isOpen={isEditModalOpen}
                    onClose={closeEditModal}
                    car={cars[selectedCarIndex]}
                    onSave={handleEditSave}
                />
            )}
        </div>
    );
};

export default CarList;