import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LimitedService from './LimitedService';

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data.data))

    }, [])
    const sev = (service.slice(0, 3))
    return (
        <div>

            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50 mt-12">Our Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-12'>

                {
                    sev.map(s => <LimitedService key={s._id} service={s}></LimitedService>)
                }
            </div>
            <div className='flex content-center justify-center mb-12'>
                <Link to='/allservice' className=" px-10 py-3 text-lg font-medium rounded-3xl bg-violet-400 text-gray-900">See All</Link>
            </div>
        </div>
    );
};

export default Services;