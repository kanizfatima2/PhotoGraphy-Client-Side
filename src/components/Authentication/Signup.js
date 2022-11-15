import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../Routes/useTitle';

import { AuthContext } from './AuthProvider';

const Signup = () => {
    useTitle('SignUp')

    const { createUser } = useContext(AuthContext)


    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))


    }

    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2 gap-20">
                <div className="text-center lg:text-left w-3/4">

                    <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt=""></img>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20 py-20">
                    <h1 className="text-5xl font-bold text-center">Sign up!!</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
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
                        <div className="form-control mt-6">
                            <input className="btn btn-warning font-bold" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an Account? <Link className='text-orange-600 font-bold ' to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;