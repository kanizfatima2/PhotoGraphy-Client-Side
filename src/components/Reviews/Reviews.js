import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Authentication/AuthProvider';
import useTitle from '../Routes/useTitle';

const Reviews = () => {
    useTitle('Add Review')
    const loadedData = useLoaderData();
    const { user } = useContext(AuthContext)
    const { _id, title, img, price, description } = loadedData.data;

    const handleReview = e => {
        e.preventDefault();

        const form = e.target;

        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const photo = user?.photoURL || 'unregistered'
        const name = user?.displayName || 'unregistered'


        const order = {
            service: _id,
            price,
            title,
            email,
            message,
            photo,
            name
        }


        fetch('https://assignment-11-server-ten-ochre.vercel.app/reviews', {
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

    return (
        <div>
            <form onSubmit={handleReview}>
                <textarea name="message" className="textarea textarea-bordered h-24 w-3/4 my-5" placeholder="Your Message"></textarea>
                <div class="flex items-center">
                    <input className="btn btn-warning mb-5" type="submit" value="Add Review" />
                    <ToastContainer></ToastContainer>
                </div>
            </form>
        </div>
    );
};

export default Reviews;