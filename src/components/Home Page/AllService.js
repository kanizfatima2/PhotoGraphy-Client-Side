import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Routes/useTitle';
import AllServiceDetails from './AllServiceDetails';

const AllService = () => {
    useTitle('All Services')
    const allloadedService = useLoaderData();
    const allService = allloadedService.data;
    // console.log(allService)

    //Spinner
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (allService?.length > 0) {
            setLoading(false);
        }
    }, [allService])
    return (
        <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-orange-600 mt-12">All Services</h2>
            {
                loading ?
                    <>
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-900"></div>

                        </div></>

                    :
                    <>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-12'>

                            {
                                allService.map(s =>

                                    <AllServiceDetails key={s._id} service={s}></AllServiceDetails>
                                )
                            }



                        </div>
                    </>
            }
        </div>
    );
};

export default AllService;