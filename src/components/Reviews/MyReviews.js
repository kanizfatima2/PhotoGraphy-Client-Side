import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import ReviewDetails from './ReviewDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../Routes/useTitle';

const MyReviews = () => {
    useTitle('My Reviews')

    const { user } = useContext(AuthContext)
    const [review, setReview] = useState({})


    useEffect(() => {
        fetch(`https://assignment-11-server-ten-ochre.vercel.app/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReview(data.data))
    }, [user?.email])

    //Delete Review
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure,you want to delete?');
        if (proceed) {
            fetch(`https://assignment-11-server-ten-ochre.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        toast.success(data.message, {
                            position: toast.POSITION.TOP_RIGHT
                        });
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