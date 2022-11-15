import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../Routes/useTitle';

import { AuthContext } from './AuthProvider';

const Login = () => {
    useTitle('Login')
    const { login, googleLogin } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .then(error => console.error(error))
    }

    // Google login 
    const handlegoogle = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
    }

    //Spinner
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (login || googleLogin) {
            setLoading(false);
        }
    }, [])

    return (
        <>
            {
                loading ?
                    <>
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-900"></div>

                        </div></>

                    :
                    <>
                        <div className="hero w-full my-20 ">
                            <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2 gap-20">
                                <div className="text-center lg:text-left w-3/4">

                                    <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt=""></img>
                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20 py-20">
                                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                                    <form onSubmit={handleSubmit} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="text" placeholder="email" name="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="text" name="password" placeholder="password" className="input input-bordered" required />
                                            <label className="label">
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                            </label>
                                        </div>
                                        <button onClick={handlegoogle} className="btn btn-info">Google</button>
                                        <div className="form-control mt-6">
                                            <input className="btn btn-primary" type="submit" value="login" />
                                        </div>
                                    </form>

                                    <p className='text-center'>New to Our Website? <Link className='text-orange-600 font-bold ' to='/signup'>Sign up</Link> </p>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    );
};

export default Login;