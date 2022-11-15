import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../Routes/useTitle';

const EditReview = () => {
    useTitle('Update Review')
    const router = useParams();
    const { id } = router;

    const [review, setReview] = useState({});
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate()

    // Get the Data 
    useEffect(() => {
        fetch(`https://assignment-11-server-ten-ochre.vercel.app/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setReview(data.data)
                    // toast.success(data.message)
                    // console.log(data.data)

                }
                else {
                    toast.error(data.error)
                }
            })
            .catch(err => toast.err(err.message))

    }, [refresh, id])

    //Update Data
    const handleSubmit = (e) => {
        e.preventDefault();

        const review = {
            message: e.target.message.value

        }

        fetch(`https://assignment-11-server-ten-ochre.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message)
                    navigate('/myreviews')
                }
                else {
                    toast.error(data.error)
                }
            })

            .catch(error => toast.error(error.message))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea name="message" className="textarea textarea-bordered h-24 w-3/4 my-5" placeholder="Your Message"></textarea>
                <div class="flex items-center">
                    <input className="btn btn-warning mb-5" type="submit" value="Update Review" />
                    <ToastContainer></ToastContainer>
                </div>
            </form>
        </div>
    );
};

export default EditReview;