import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServiceDetails from './AllServiceDetails';

const AllService = () => {
    const allloadedService = useLoaderData();
    const allService = allloadedService.data;
    // console.log(allService)

    return (
        <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-orange-600 mt-12">All Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-12'>
                {
                    allService.map(s =>

                        <AllServiceDetails key={s._id} service={s}></AllServiceDetails>
                    )
                }



            </div>
        </div>
    );
};

export default AllService;