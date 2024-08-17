import React from 'react';

interface PopupProps {
    rentalStartDate: string;
    rentalEndDate: string;
    totalAmount: number;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ rentalStartDate, rentalEndDate, totalAmount, onClose }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Rental Details</h2>
                <p><strong>Start Date:</strong> {rentalStartDate}</p>
                <p><strong>End Date:</strong> {rentalEndDate}</p>
                <p><strong>Total Amount:</strong> ${totalAmount.toFixed(2)}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;