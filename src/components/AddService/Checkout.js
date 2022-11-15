import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Authentication/AuthProvider';
import useTitle from '../Routes/useTitle';

const Checkout = () => {
    useTitle('Checkout')

    const loadedData = useLoaderData();
    const { user } = useContext(AuthContext)
    const { _id, title, img, price, description } = loadedData.data;

    const handleCheckout = e => {
        e.preventDefault();

        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;


        const order = {
            service: _id,
            price,
            title,
            customer: fname,
            lname,
            email,
            phone,
            message
        }

        if (phone.length < 11) {
            alert('Please Provide a valid number!')
        }
        else {
            fetch('http://localhost:5000/newService', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        toast.success(data.message, {
                            position: toast.POSITION.TOP_RIGHT
                        });

                        form.reset()
                    }
                })
                .catch(err => console.error(err))
        }
    }


    return (
        <div className='bg-green-200 p-5'>
            <form onSubmit={handleCheckout}>
                <h2 className='text-4xl font-semibold text-center mb-5'>You are about to Book this Package: <span className='text-orange-600'>{title}</span></h2>
                <h4 className='text-2xl font-semibold text-center mb-5 '>Price: ${price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                    <input type="text" name="fname" placeholder=" First name" className="input input-bordered w-full" required />

                    <input type="text" name="lname" placeholder=" Last name" className="input input-bordered w-full" />

                    <input type="text" name="email" placeholder=" Your email" defaultValue={user?.email} className="input input-bordered w-full" required />

                    <input type="text" name="phone" placeholder=" Your Phone number" className="input input-bordered w-full" required />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-3/4 my-5" placeholder="Your Message"></textarea>

                <div class="flex items-center">
                    <input className="btn btn-warning mb-5" type="submit" value="Please Book your Package" />
                    <ToastContainer />
                </div>
            </form>
        </div>
    );
};

export default Checkout;