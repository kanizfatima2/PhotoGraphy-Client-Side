import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';

const Reviews = () => {

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


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {

                    alert('Successfully you booked your Package')
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
                </div>
            </form>
        </div>
    );
};

export default Reviews;