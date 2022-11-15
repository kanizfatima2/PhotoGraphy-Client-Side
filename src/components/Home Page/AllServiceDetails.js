import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServiceDetails = ({ service }) => {

    const { user } = useContext(AuthContext)

    const { img, price, title, description, rating, _id } = service;
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-200 text-gray-900 h-full">
                {/* <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" /> */}

                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} style={{ objectFit: 'cover' }} alt="" />
                    </PhotoView>
                </PhotoProvider>

                <div className='flex justify-between pt-3 pb-0 px-6 '>
                    <p className='font-semibold'>{rating}</p>
                    <h3 className='font-bold text-orange-600 text-xl'>${price}</h3>
                </div>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                        <p className="text-gray-900">{description.slice(0, 50) + "..."}</p>
                    </div>
                    <Link to={`/singleservice/${_id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-700 text-gray-200">View Details</Link>
                    {
                        user?.email ?
                            <>
                                <Link to={`/checkout/${_id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-orange-700 text-gray-200">Add Service</Link></>
                            : <></>
                    }

                </div>
            </div>
        </div>
    );
};

export default AllServiceDetails;