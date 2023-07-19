import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        axios.post('http://localhost:8000/api/login', { email, password })
            .then((res) => {
                // Handle successful login

                // console.log(res.data);
                // console.log("success");

                localStorage.email = res.data.email
                localStorage.name = res.data.name
                localStorage.phone = res.data.phone
                localStorage.photo = res.data.photo
                localStorage.token = res.data.token
                window.location.reload()
            })
            .catch((error) => {
                // Handle login error
                console.error(error);
            });
    };

    
    return (
        <div className="container-fluid bg-theme" id={'login'}>
            <div className="row">
                <div className="col-md-6">
                    <div className="card bg-theme">
                        <div className="card-header">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <label>Email:</label>
                            <input type="email" value={email} onChange={handleEmailChange} />
                            <br />
                            <label>Password:</label>
                            <input type="password" value={password} onChange={handlePasswordChange} />
                            <br />
                            <button onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;