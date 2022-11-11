import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import ReviewDetails from './ReviewDetails';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [review, setReview] = useState({})


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReview(data.data))
    }, [user?.email])

    //Delete order
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure,you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        alert(data.message)
                        const remaining = review.filter(odr => odr._id !== id)
                        setReview(remaining)
                    }
                })
        }

    }


    console.log(review)

    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>
                                    <label>

                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Name & Email</th>
                                <th>Service</th>
                                <th>Reviews</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.from(review).map(r => <ReviewDetails key={r._id} review={r} handleDelete={handleDelete}></ReviewDetails>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;