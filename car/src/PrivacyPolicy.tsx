import React from 'react';
import './privacypolicy.css';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="privacy-container">
            <header className="privacy-header">
                <h1 className="privacy-title">Privacy Policy for Vehicle Rental System</h1>
            </header>

            <section className="privacy-section">
                <h2 className="privacy-heading">1. Introduction</h2>
                <p className="privacy-text">Vehicle Rental System respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our vehicle rental services.</p>
            </section>

            <section className="privacy-section">
                <h2 className="privacy-heading">2. Information We Collect</h2>
                <p className="privacy-text">We may collect the following types of personal information from you:</p>
                <ul className="privacy-list">
                    <li className="privacy-list-item">Contact information (e.g., name, email address, phone number)</li>
                    <li className="privacy-list-item">Payment information (e.g., credit card details)</li>
                    <li className="privacy-list-item">Vehicle preference and rental history</li>
                </ul>
            </section>

            <section className="privacy-section">
                <h2 className="privacy-heading">3. How We Use Your Information</h2>
                <p className="privacy-text">We use your personal information for the following purposes:</p>
                <ul className="privacy-list">
                    <li className="privacy-list-item">To process your vehicle rental bookings and reservations</li>
                    <li className="privacy-list-item">To communicate with you regarding your bookings, reservations, and customer support inquiries</li>
                    <li className="privacy-list-item">To provide customer support services</li>
                    <li className="privacy-list-item">To improve our services and tailor them to your needs</li>
                    <li className="privacy-list-item">To comply with legal and regulatory requirements</li>
                </ul>
            </section>

            <section className="privacy-section">
                <h2 className="privacy-heading">4. Sharing of Information</h2>
                <p className="privacy-text">We may share your personal information with third parties in the following circumstances:</p>
                <ul className="privacy-list">
                    <li className="privacy-list-item">With our business partners and service providers who assist us in delivering our services (e.g., payment processors, vehicle maintenance providers)</li>
                    <li className="privacy-list-item">When required by law or legal process</li>
                    <li className="privacy-list-item">In connection with a merger, acquisition, or sale of all or a portion of our assets</li>
                </ul>
            </section>

            <section className="privacy-section">
                <h2 className="privacy-heading">5. Data Security</h2>
                <p className="privacy-text">We take reasonable measures to protect your personal information from unauthorized access, use, and disclosure. However, no method of transmission over the internet or electronic storage is completely secure.</p>
            </section>

            <section className="privacy-section">
                <h2 className="privacy-heading">6. Your Choices</h2>
                <p className="privacy-text">You have the right to:</p>
                <ul className="privacy-list">
                    <li className="privacy-list-item">Access and update your personal information</li>
                    <li className="privacy-list-item">Opt-out of receiving marketing communications from us</li>
                    <li className="privacy-list-item">Request deletion of your personal information, subject to legal and contractual obligations</li>
                </ul>
            </section>

            <section className="privacy-section">
                <h2 className="privacy-heading">7. Changes to this Privacy Policy</h2>
                <p className="privacy-text">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.</p>
            </section>

            <section className="privacy-section">
                <h2 className="privacy-heading">8. Contact Us</h2>
                <p className="privacy-text">If you have any questions or concerns about our Privacy Policy or practices, please contact us at <a href="tel:9876543210" className="privacy-link">9876543210</a>.</p>
            </section>
        </div>
    );
}

export default PrivacyPolicy;
