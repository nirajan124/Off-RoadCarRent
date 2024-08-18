import React from 'react';
import './CarRental.css';
import {Link} from "react-router-dom";
import rollsroyce from "./assets/rolls_car.jpg";
import loaction from "./assets/location.png";
import user from "./assets/user.jpg";
const CarRental: React.FC = () => {
    return (
        <div className="car-body">
            <header className="car-header">
                <h1>Rent Vehicle</h1>
                <div className="car-filters">
                    <div className="car-dropdown">
                        <label htmlFor="vehicle-type">Vehicle Type</label>
                        <select id="vehicle-type">
                            <option value="all">All</option>
                            <option value="car">Car</option>
                        </select>
                    </div>
                    <div className="car-dropdown">
                        <label htmlFor="vehicle-brand">Brand</label>
                        <select id="vehicle-brand">
                            <option value="all">All</option>
                            <option value="Rolls Royce">Rolls Royce</option>
                            <option value="BMW">BMW</option>
                            <option value="KIA">KIA</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Suzuki">Suzuki</option>
                            <option value="TATA">TATA</option>
                            <option value="Volkswagen">Volkswagen</option>
                        </select>
                    </div>
                    <div className="car-dropdown">
                        <label htmlFor="price-filter">Price</label>
                        <select id="price-filter">
                            <option value="100-300">$100-$300</option>
                            <option value="301-500">$301-$500</option>
                            <option value="501-800">$501-$800</option>
                            <option value="801-1000">$801-$1000</option>
                        </select>
                    </div>
                </div>
            </header>
            <div className="car-vehicle-grid">
                {Array.from({ length: 14 }, (_, index) => (
                    <div className="car-vehicle-card" key={index}>
                        <p>{getVehicleName(index)}</p>
                        <div className="car-image-container">
                            <img src={rollsroyce} alt={`Vehicle ${index + 1}`} />
                        </div>
                        <div className="car-info-container">
                            <div className="car-location">
                                <img src={loaction} alt="Location Icon" />
                                <span>Kathmandu</span>
                            </div>
                            <div className="car-seats">
                                <img src={user} alt="User Icon" />
                                <span>4 Seats</span>
                            </div>
                            <div className="car-price-section">
                                <div className="car-price">
                                    <span className="car-estimate">Estimated Price</span>
                                    <span className="car-amount">{getVehiclePrice(index)}/day</span>
                                </div>
                                <div className="car-book-button">
                                    <Link to='/carbooking'><button>Book</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const getVehicleName = (index: number) => {
    const names = ['Rolls Royce', 'Rolls Royce', 'BMW', 'BMW', 'KIA', 'KIA', 'Mercedes', 'Mercedes', 'Suzuki', 'Suzuki', 'TATA', 'TATA', 'Volkswagen', 'Volkswagen'];
    return names[index];
};
const getVehiclePrice = (index: number) => {
    const prices = ['$950', '$950', '$900', '$900', '$650', '$650', '$780', '$780', '$350', '$350', '$250', '$250', '$200', '$200'];
    return prices[index];
};

export default CarRental;
