// TermsAndConditions.tsx
import React from 'react';
import './termandcondition.css';

const TermsAndConditions: React.FC = () => {
    return (
        <div className="contract_container">
            <h1>Vehicle Rental Terms and Conditions</h1>

            <div className="contract-term">
                <h2>Rental Agreement</h2>
                <p>By renting a vehicle from Vehicle Rental System, the renter agrees to all terms and conditions outlined herein.</p>
            </div>

            <div className="contract-term">
                <h2>Reservation and Rental Duration</h2>
                <p>Reservations are subject to vehicle availability. The rental period begins and ends at the times specified in the reservation unless extended with prior approval and additional charges.</p>
            </div>

            <div className="contract-term">
                <h2>Vehicle Condition</h2>
                <p>The vehicle will be provided in a clean and roadworthy condition. The renter agrees to return the vehicle in the same condition, excluding normal wear and tear.</p>
            </div>

            <div className="contract-term">
                <h2>Payment Terms</h2>
                <p>Rental charges are based on the duration of the rental period and any additional services requested. Payment must be made by credit card or other approved methods. A security deposit may be required at the time of rental.</p>
            </div>

            <div className="contract-term">
                <h2>Use Restrictions</h2>
                <ul>
                    <li>For any illegal purposes.</li>
                    <li>Off-road or on unpaved surfaces without prior approval.</li>
                    <li>To carry passengers or property for hire.</li>
                    <li>By anyone not listed as an authorized driver in the rental agreement.</li>
                </ul>
            </div>

            <div className="contract-term">
                <h2>Liability Disclaimer</h2>
                <p>The rental company is not liable for loss or damage to personal property left in the vehicle, nor for accidents or injuries that occur during the rental period, unless due to the rental company's negligence.</p>
            </div>

            <div className="contract-term">
                <h2>Termination of Agreement</h2>
                <p>The rental company reserves the right to terminate the rental agreement and repossess the vehicle at any time, without prior notice, if the renter fails to comply with the terms and conditions.</p>
            </div>

            <div className="contract-term">
                <h2>Dispute Resolution</h2>
                <p>Any disputes arising from this agreement shall be resolved in [jurisdiction], through arbitration or mediation as per local laws.</p>
            </div>

            <div className="contract-term">
                <h2>Additional Terms</h2>
                <p>Any additional terms agreed upon at the time of rental, including special equipment or accessories, shall be outlined in the rental agreement.</p>
            </div>
        </div>
    );
}

export default TermsAndConditions;