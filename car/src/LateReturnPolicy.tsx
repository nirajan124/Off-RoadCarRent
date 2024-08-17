import React from 'react';
import './LateReturnPolicy.css';

const LateReturnPolicy: React.FC = () => {
    return (
        <div className="late-return-policy-container">
            <h2 className="late-return-policy-heading">Late Return Fine Policy</h2>
            <ul className="late-return-policy-list">
                <li className="late-return-policy-item">
                    <strong>Grace Period:</strong> A grace period of 30 minutes is allowed beyond the return time.
                </li>
                <li className="late-return-policy-item">
                    <strong>Initial Fine:</strong> After the grace period, a flat fine of $20 is charged.
                </li>
                <li className="late-return-policy-item">
                    <strong>Hourly Fine:</strong> An additional $10 per hour is charged after the initial fine.
                </li>
                <li className="late-return-policy-item">
                    <strong>Daily Cap:</strong> The maximum fine per day is capped at $100.
                </li>
                <li className="late-return-policy-item">
                    <strong>Weekend Returns:</strong> Late returns on weekends incur an extra $50 fine.
                </li>

                <li className="late-return-policy-item">
                    <strong>Appeals:</strong> Fines can be appealed within 7 days by contacting on our Contact-Number.
                </li>
            </ul>
        </div>
    );
}

export default LateReturnPolicy;
