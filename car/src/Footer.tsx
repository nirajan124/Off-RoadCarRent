import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";
import face from './assets/facebooklogo.png';
import insta from "./assets/instagramlogo.png";
import whats from "./assets/whatsapplogo.png";
import phn from "./assets/phone.png";
import mail from "./assets/emailicon.png";

const Footer: React.FC = () => {
    return (
        <footer className="footer-main">
            <div className="footer-container-main">
                <div className="footer-section-main social-main">
                    <h3>Social Network</h3>
                    <div className="social-icons-main">
                        <a href="https://www.facebook.com/" target="_blank"><img src={face} alt="Facebook" /></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src={insta} alt="Instagram" /></a>
                        <a href="https://web.whatsapp.com/" target="_blank"><img src={whats} alt="WhatsApp" /></a>
                    </div>
                </div>
                <div className="footer-section-main contact-main">
                    <h3>Contact Us</h3>
                    <p><img src={phn} alt="Phone" /> Emergency Contact.No.9842372593</p>
                    <p><img src={mail} alt="Email" /> vehiclerental@gmail.com</p>
                </div>
                <div className="footer-section-main company-main">
                    <h3>Company</h3>
                    <Link to ="about"><p>About Us</p></Link>
                    <Link to="contract"><p>Terms & Conditions</p></Link>
                    <Link to ="pri"><p>Privacy Policy</p></Link>
                    <Link to="/"><p>Home Page</p></Link>
                    <Link to="LateReturnPolicy "><p>LateReturnPolicy</p></Link>
                    <Link to="CancellationPolicy "><p>CancellationPolicy</p></Link>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
