import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Authentication/AuthProvider';
import SingleServiceReview from '../Reviews/SingleServiceReview';
import useTitle from '../Routes/useTitle';

const SingleService = () => {

    useTitle('Service Details')
    const { user } = useContext(AuthContext)
    const loadeddata = useLoaderData();
    const data = loadeddata.data;
    const { img, title, rating, price, description, _id } = data

    const handleUser = (user) => {
        if (user === null) {
            toast.success('Please Login !', {
                position: toast.POSITION.TOP_RIGHT
            });

        }


    }

    const [review, setReview] = useState([])
    useEffect(() => {
        fetch(`https://assignment-11-server-ten-ochre.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReview(data.data))

    }, [])
    return (
        <div>
            <div className='grid grid-cols-1  mt-12 mb-12'>
                <div className="w-3/4 mx-auto rounded-md shadow-md bg-gray-200 text-gray-900 h-full">
                    <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-3/4 bg-gray-500" />
                    <div className='flex justify-between pt-3 pb-0 px-6 '>
                        <p className='font-semibold'>{rating}</p>
                        <h3 className='font-bold text-orange-600 text-xl'>${price}</h3>
                    </div>
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                            <p className="text-gray-900">{description}</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex content-center justify-center mb-12'>
                <Link onClick={() => handleUser(user)} to={`/reviews/${_id}`} className=" px-10 py-3 text-lg font-medium rounded-3xl bg-orange-400 text-gray-900">Add Review</Link>
                <Link onClick={() => handleUser(user)} to={`/checkout/${_id}`} className=" px-10 py-3 text-lg font-medium rounded-3xl bg-violet-400 text-gray-900 ml-2">Add Service</Link>
                <ToastContainer />
            </div>

            {/* //Read Review  */}
            {
                review.map(r => <SingleServiceReview key={r._id} rev={r}></SingleServiceReview>)
            }
        </div>
    );
};

export default SingleService;