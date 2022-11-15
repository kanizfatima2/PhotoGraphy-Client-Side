import React, { useEffect, useState } from 'react';

const NewAddServiceDetails = ({ service }) => {

    const { email, _id, customer, lname, title, phone } = service;

    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">

                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">{customer} {lname}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
                </div>
                <p className="text-gray-100"><small>Phone: {phone}</small></p>
                <p className="text-gray-100"><small>Email: {email}</small></p>
                <p>Booking Date: 14 Nov 2022</p>
            </div>
        </div>
    );
};

export default NewAddServiceDetails;