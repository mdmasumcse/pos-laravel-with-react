import axios from 'axios';
import React, { useState } from 'react';
import Constants from '../../../Constants';

const Login = () => {

    const [input, setInput] = useState({})
    const [errors, setErrors] = useState({})

    const handleInput = (e) => setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }))

    const handleLogin = () => {
        axios.post(`${Constants.BASE_URL}/login`, input)
            .then((res) => {
                localStorage.email = res.data.email
                localStorage.name = res.data.name
                localStorage.phone = res.data.phone
                localStorage.photo = res.data.photo
                localStorage.token = res.data.token
                window.location.reload()
            })
            .catch((errors) => {
                if (errors.response.status === 422) {
                    setErrors(errors.response.data.errors)
                }
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
                            <label className={'w-100'}>
                                <p>Email/Phone</p>
                                <input
                                    className='form-control mt-2'
                                    type={'text'}
                                    name={'email'}
                                    value={input.email}
                                    onChange={handleInput}
                                />
                                <p className={'text-danger p-2'}><small>{errors.email !== undefined ? errors.email[0] : null}</small></p>
                            </label>
                            <label className={'w-100 mt-4'}>
                                <p>Password</p>
                                <input
                                    className='form-control mt-2'
                                    type={'password'}
                                    name={'password'}
                                    value={input.password}
                                    onChange={handleInput}
                                />
                                <p className={'text-danger p-2'}><small>{errors.password !== undefined ? errors.password[0] : null}</small></p>
                            </label>
                            <div className='d-grid mt-4'>
                                <button onClick={handleLogin} className='btn btn-outline-warning'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;