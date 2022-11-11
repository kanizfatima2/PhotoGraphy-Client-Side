import React from 'react';

const AllServiceDetails = ({ service }) => {

    const { img, price, title, description, rating, _id } = service;
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-200 text-gray-900 h-full">
                <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className='flex justify-between pt-3 pb-0 px-6 '>
                    <p className='font-semibold'>{rating}</p>
                    <h3 className='font-bold text-orange-600 text-xl'>${price}</h3>
                </div>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                        <p className="text-gray-900">{description.slice(0, 50) + "..."}</p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-700 text-gray-200">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AllServiceDetails;