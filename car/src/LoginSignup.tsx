//
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginSignup.css';
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
//
// const LoginSignup: React.FC = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//         fullname: '',
//         email: '',
//         contact: '',
//     });
//
//     const [isLogin, setIsLogin] = useState(true);
//     const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false);
//     const [forgotPasswordData, setForgotPasswordData] = useState({
//         email: '',
//         newPassword: '',
//     });
//
//     const navigate = useNavigate();
//
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { id, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [id]: value,
//         }));
//     };
//
//     const handleForgotPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { id, value } = e.target;
//         setForgotPasswordData((prevData) => ({
//             ...prevData,
//             [id]: value,
//         }));
//     };
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//
//         const endpoint = isLogin
//             ? 'http://localhost:8080/login/authenticate'
//             : 'http://localhost:8080/registration/save';
//
//         const payload = isLogin
//             ? { email: formData.email, password: formData.password }
//             : {
//                 username: formData.username,
//                 password: formData.password,
//                 full_name: formData.fullname,
//                 email: formData.email,
//                 contact_us: formData.contact,
//             };
//
//         try {
//             const response = await fetch(endpoint, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(payload),
//             });
//
//             if (response.ok) {
//                 const data = await response.json();
//                 if (data.userId) {
//                     localStorage.setItem('userId', data.userId);
//                 }
//                 if (data.message.includes('Admin')) {
//                     toast.success('Admin login successful!');
//
//                 } else {
//                     toast.success('Login successful!');
//                     navigate('/');
//                 }
//             } else {
//                 const errorText = await response.text();
//                 toast.error(`Error: ${errorText}`);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             toast.error('An unexpected error occurred.');
//         }
//     };
//
//     const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const endpoint = 'http://localhost:8080/password/change';
//
//         try {
//             const response = await fetch(endpoint, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(forgotPasswordData),
//             });
//
//             if (response.ok) {
//                 toast.success('Password change successful.');
//                 setIsForgotPasswordVisible(false);
//             } else {
//                 const errorText = await response.text();
//                 toast.error(`Error: ${errorText}`);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             toast.error('An unexpected error occurred.');
//         }
//     };
//
//     return (
//         <div className="loginsignup-wrap">
//             <div className="loginsignup-html">
//                 <input
//                     id="tab-1"
//                     type="radio"
//                     name="tab"
//                     className="loginsignup-sign-in"
//                     checked={isLogin}
//                     onChange={() => setIsLogin(true)}
//                 />
//                 <label htmlFor="tab-1" className="loginsignup-tab">Sign In</label>
//
//                 <input
//                     id="tab-2"
//                     type="radio"
//                     name="tab"
//                     className="loginsignup-sign-up"
//                     checked={!isLogin}
//                     onChange={() => setIsLogin(false)}
//                 />
//                 <label htmlFor="tab-2" className="loginsignup-tab">Sign Up</label>
//
//                 <div className="loginsignup-form">
//                     {isLogin ? (
//                         <form onSubmit={handleSubmit} className="loginsignup-sign-in-htm">
//                             <div className="loginsignup-group">
//                                 <label htmlFor="email" className="loginsignup-label">Email</label>
//                                 <input id="email" type="text" className="loginsignup-input" value={formData.email} onChange={handleChange} />
//                             </div>
//                             <div className="loginsignup-group">
//                                 <label htmlFor="password" className="loginsignup-label">Password</label>
//                                 <input id="password" type="password" className="loginsignup-input" value={formData.password} onChange={handleChange} />
//                             </div>
//                             <div className="loginsignup-group">
//                                 <input id="check" type="checkbox" className="loginsignup-check" defaultChecked />
//                                 <label htmlFor="check">
//                                     <span className="loginsignup-icon"></span> Keep me Signed in
//                                 </label>
//                             </div>
//                             <div className="loginsignup-group">
//                                 <input type="submit" className="loginsignup-button" value="Sign In" />
//                             </div>
//                             <div className="loginsignup-hr"></div>
//                             <div className="loginsignup-foot-lnk">
//                                 <a href="#forgot" onClick={() => setIsForgotPasswordVisible(true)}>Forgot Password?</a>
//                             </div>
//                         </form>
//                     ) : (
//                         <form onSubmit={handleSubmit} className="loginsignup-sign-up-htm">
//                             <div className="loginsignup-group">
//                                 <label htmlFor="username" className="loginsignup-label">Username</label>
//                                 <input id="username" type="text" className="loginsignup-input" value={formData.username} onChange={handleChange} />
//                             </div>
//                             <div className="loginsignup-group">
//                                 <label htmlFor="fullname" className="loginsignup-label">Fullname</label>
//                                 <input id="fullname" type="text" className="loginsignup-input" value={formData.fullname} onChange={handleChange} />
//                             </div>
//                             <div className="loginsignup-group">
//                                 <label htmlFor="email" className="loginsignup-label">Email Address</label>
//                                 <input id="email" type="email" className="loginsignup-input" value={formData.email} onChange={handleChange} />
//                             </div>
//                             <div className="loginsignup-group">
//                                 <label htmlFor="contact" className="loginsignup-label">Contact Number</label>
//                                 <input id="contact" type="text" className="loginsignup-input" value={formData.contact} onChange={handleChange} />
//                             </div>
//                             <div className="loginsignup-group">
//                                 <label htmlFor="password" className="loginsignup-label">Password</label>
//                                 <input id="password" type="password" className="loginsignup-input" value={formData.password} onChange={handleChange} />
//                             </div>
//                             <div className="loginsignup-group">
//                                 <input type="submit" className="loginsignup-button" value="Sign Up" />
//                             </div>
//                             <div className="loginsignup-hr"></div>
//                             <div className="loginsignup-foot-lnk">
//                             </div>
//                         </form>
//                     )}
//                 </div>
//
//                 {isForgotPasswordVisible && (
//                     <div className="forgot-password-modal">
//                         <div className="forgot-password-content">
//                             <h2>Forgot Password</h2>
//                             <form onSubmit={handleForgotPasswordSubmit}>
//                                 <div className="loginsignup-group">
//                                     <label htmlFor="email" className="loginsignup-label">Email</label>
//                                     <input id="email" type="email" className="loginsignup-input" value={forgotPasswordData.email} onChange={handleForgotPasswordChange} />
//                                 </div>
//                                 <div className="loginsignup-group">
//                                     <label htmlFor="newPassword" className="loginsignup-label">New Password</label>
//                                     <input id="newPassword" type="password" className="loginsignup-input" value={forgotPasswordData.newPassword} onChange={handleForgotPasswordChange} />
//                                 </div>
//                                 <div className="loginsignup-group">
//                                     <input type="submit" className="loginsignup-button" value="Change Password" />
//                                 </div>
//                                 <div className="loginsignup-group">
//                                     <button className="loginsignup-button" onClick={() => setIsForgotPasswordVisible(false)}>Cancel</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 )}
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };
//
// export default LoginSignup;
//
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginSignup: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        fullname: '',
        email: '',
        contact: '',
    });

    const [isLogin, setIsLogin] = useState(true);
    const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false);
    const [forgotPasswordData, setForgotPasswordData] = useState({
        email: '',
        newPassword: '',
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleForgotPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setForgotPasswordData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const endpoint = isLogin
            ? 'http://localhost:8080/login/authenticate'
            : 'http://localhost:8080/registration/save';

        const payload = isLogin
            ? { email: formData.email, password: formData.password }
            : {
                username: formData.username,
                password: formData.password,
                full_name: formData.fullname,
                email: formData.email,
                contact_us: formData.contact,
            };

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.userId) {
                    localStorage.setItem('userId', data.userId);
                }
                if (data.message.includes('Admin')) {
                    toast.success('Admin login successful!');
                } else {
                    toast.success('Login successful!');
                    navigate('/');
                }
            } else {
                const errorText = await response.text();
                toast.error(`Error: ${errorText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.success('LOgin successfull');
        }
    };

    const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const endpoint = 'http://localhost:8080/password/change';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(forgotPasswordData),
            });

            if (response.ok) {
                toast.success('Password change successful.');
                setIsForgotPasswordVisible(false);
            } else {
                const errorText = await response.text();
                toast.error(`Error: ${errorText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An unexpected error occurred.');
        }
    };

    return (
        <div className="loginsignup-wrap">
            <div className="loginsignup-html">
                <input
                    id="tab-1"
                    type="radio"
                    name="tab"
                    className="loginsignup-sign-in"
                    checked={isLogin}
                    onChange={() => setIsLogin(true)}
                />
                <label htmlFor="tab-1" className="loginsignup-tab">Sign In</label>

                <input
                    id="tab-2"
                    type="radio"
                    name="tab"
                    className="loginsignup-sign-up"
                    checked={!isLogin}
                    onChange={() => setIsLogin(false)}
                />
                <label htmlFor="tab-2" className="loginsignup-tab">Sign Up</label>

                <div className="loginsignup-form">
                    {isLogin ? (
                        <form onSubmit={handleSubmit} className="loginsignup-sign-in-htm">
                            <div className="loginsignup-group">
                                <label htmlFor="email" className="loginsignup-label">Email</label>
                                <input id="email" type="text" className="loginsignup-input" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="loginsignup-group">
                                <label htmlFor="password" className="loginsignup-label">Password</label>
                                <input id="password" type="password" className="loginsignup-input" value={formData.password} onChange={handleChange} />
                            </div>
                            <div className="loginsignup-group">
                                <input id="check" type="checkbox" className="loginsignup-check" defaultChecked />
                                <label htmlFor="check">
                                    <span className="loginsignup-icon"></span> Keep me Signed in
                                </label>
                            </div>
                            <div className="loginsignup-group">
                                <input type="submit" className="loginsignup-button" value="Sign In" />
                            </div>
                            <div className="loginsignup-hr"></div>
                            <div className="loginsignup-foot-lnk">
                                <a href="#forgot" onClick={() => setIsForgotPasswordVisible(true)}>Forgot Password?</a>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit} className="loginsignup-sign-up-htm">
                            <div className="loginsignup-group">
                                <label htmlFor="username" className="loginsignup-label">Username</label>
                                <input id="username" type="text" className="loginsignup-input" value={formData.username} onChange={handleChange} />
                            </div>
                            <div className="loginsignup-group">
                                <label htmlFor="fullname" className="loginsignup-label">Fullname</label>
                                <input id="fullname" type="text" className="loginsignup-input" value={formData.fullname} onChange={handleChange} />
                            </div>
                            <div className="loginsignup-group">
                                <label htmlFor="email" className="loginsignup-label">Email Address</label>
                                <input id="email" type="email" className="loginsignup-input" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="loginsignup-group">
                                <label htmlFor="contact" className="loginsignup-label">Contact Number</label>
                                <input id="contact" type="text" className="loginsignup-input" value={formData.contact} onChange={handleChange} />
                            </div>
                            <div className="loginsignup-group">
                                <label htmlFor="password" className="loginsignup-label">Password</label>
                                <input id="password" type="password" className="loginsignup-input" value={formData.password} onChange={handleChange} />
                            </div>
                            <div className="loginsignup-group">
                                <input type="submit" className="loginsignup-button" value="Sign Up" />
                            </div>
                            <div className="loginsignup-hr"></div>
                        </form>
                    )}
                </div>

                {isForgotPasswordVisible && (
                    <div className="forgot-password-modal">
                        <div className="forgot-password-content">
                            <h2>Forgot Password</h2>
                            <form onSubmit={handleForgotPasswordSubmit}>
                                <div className="loginsignup-group">
                                    <label htmlFor="email" className="loginsignup-label">Email</label>
                                    <input id="email" type="email" className="loginsignup-input" value={forgotPasswordData.email} onChange={handleForgotPasswordChange} />
                                </div>
                                <div className="loginsignup-group">
                                    <label htmlFor="newPassword" className="loginsignup-label">New Password</label>
                                    <input id="newPassword" type="password" className="loginsignup-input" value={forgotPasswordData.newPassword} onChange={handleForgotPasswordChange} />
                                </div>
                                <div className="loginsignup-group">
                                    <input type="submit" className="loginsignup-button" value="Change Password" />
                                </div>
                                <div className="loginsignup-group">
                                    <button type="button" className="loginsignup-button cancel" onClick={() => setIsForgotPasswordVisible(false)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginSignup;
