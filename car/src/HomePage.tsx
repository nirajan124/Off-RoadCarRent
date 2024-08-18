import React from 'react';
import './homepage.css';
import userfriendly from "./assets/user.jpg";
import main from "./assets/main.png";
import system from "./assets/our_system.jpg";
import transparent from "./assets/Transparent_pricing.jpg";
import selection from "./assets/wide_vehicle_selection.jpg";
import flexible from "./assets/Flexible_booking.jpg";
import easy from "./assets/easy_to_rent.jpg";
import bmw from "./assets/Bmw-Logo.png";
import kia from "./assets/KIA.jpeg";
import tata from "./assets/Tata-Logo.jpg";
import mer from "./assets/Mercedes-Logo.jpg";
import rolls from "./assets/Rolls-Royce-Logo.png";
import volk from "./assets/Volkswagen-Logo.jpg";


const HomePage: React.FC = () => {
    return (
        <div className="home-body">

            <main className="home-main">
                <div className="home-hero" style={{background: `url(${main}) no-repeat center center/cover`}}>
                    <h1>Looking for a Vehicle? Rent a Vehicle in just Few Easy Steps.</h1>
                    <div className="home-steps">
                        <div className="home-step">
                            <div className="home-step-number">1</div>
                            <h2>Choose Your Favorite Vehicle</h2>
                            <p>Select your preferred vehicle, tailored to your needs and budget.</p>
                        </div>
                        <div className="home-step">
                            <div className="home-step-number">2</div>
                            <h2>Submit Your Requirements</h2>
                            <p>Fill out your details and submit your rental request with ease.</p>
                        </div>
                        <div className="home-step">
                            <div className="home-step-number">3</div>
                            <h2>Get Confirmation</h2>
                            <p>Receive a confirmation of your rental and get ready to hit the road.</p>
                        </div>
                    </div>
                </div>
            </main>

            <div className="home-background" style={{background: `url(${system}) no-repeat center center/cover`}}>
                <div className="home-content">
                    <div className="home-main-heading">Why Choose Our Vehicle Rental System?</div>

                    <div className="home-section home-user-friendly">
                        <img src={userfriendly} alt="User Friendly" className="home-icon"/>
                        <div className="home-text-content">
                            <div className="home-sub-heading">User-Friendly Interface</div>
                            <p>Our system is easy to navigate, making the rental process smooth and efficient.</p>
                        </div>
                    </div>

                    <div className="home-section home-transparent-pricing">
                        <img src={transparent} alt="Transparent Pricing" className="home-icon"/>
                        <div className="home-text-content">
                            <div className="home-sub-heading">Transparent Pricing</div>
                            <p>No hidden fees. Know exactly what you are paying for.</p>
                        </div>
                    </div>

                    <div className="home-section home-wide-selection">
                        <img src={selection} alt="Wide Selection" className="home-icon"/>
                        <div className="home-text-content">
                            <div className="home-sub-heading">Wide Selection</div>
                            <p>Choose from a variety of vehicles to suit your needs.</p>
                        </div>
                    </div>

                    <div className="home-section home-flexible-booking">
                        <img src={flexible} alt="Flexible Booking" className="home-icon"/>
                        <div className="home-text-content">
                            <div className="home-sub-heading">Flexible Booking Options</div>
                            <p>Book at your convenience with our flexible booking options.</p>
                        </div>
                    </div>

                    <div className="home-section home-easy-to-rent">
                        <img src={easy} alt="Easy to Rent" className="home-icon"/>
                        <div className="home-text-content">
                            <div className="home-sub-heading">Easy to Rent</div>
                            <p>Renting a vehicle has never been easier with our streamlined process.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-brands">
                <p>Our Trusted Brands</p>
                <div className="home-container">
                    <div className="home-img-container">
                        <img src={bmw} alt="Brand 1" className="home-img"/>
                        <img src={rolls} alt="Brand 2" className="home-img"/>
                        <img src={mer} alt="Brand 3" className="home-img"/>
                        <img src={kia} alt="Brand 4" className="home-img"/>
                        <img src={volk} alt="Brand 5" className="home-img"/>


                        <img src={tata} alt="Brand 8" className="home-img"/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;











