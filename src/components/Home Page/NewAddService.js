import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import NewAddServiceDetails from './NewAddServiceDetails';

const NewAddService = () => {

    const { user } = useContext(AuthContext)
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/newService?email=${user.email}`)
            .then(res => res.json())
            .then(data => setService(data.data))
    }, [user?.email])
    console.log(service)

    return (
        <div>
            <div>

                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50 mt-20">My Services</h2></div>
            {
                service.length ?
                    <>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-12'>
                            {
                                service.map(s =>
                                    <NewAddServiceDetails service={s} key={s._id}></NewAddServiceDetails>
                                )
                            }
                        </div>

                    </>
                    :
                    <>
                        <h2>No Added Service</h2></>
            }
        </div>
    );
};

export default NewAddService;