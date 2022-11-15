
import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog";
import Login from '../Authentication/Login'
import Signup from '../Authentication/Signup'
import AllService from "../Home Page/AllService";
import Home from "../Home Page/Home";
import SingleService from "../Home Page/SingleService";
import Root from "./Root";
import PrivateRoute from './PrivateRoute';
import Reviews from '../Reviews/Reviews'
import AddService from "../AddService/AddService";
import Checkout from '../AddService/Checkout'
import MyReviews from "../Reviews/MyReviews";
import EditReview from "../Reviews/EditReview";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>


            },
            {
                path: '/login',
                element: <Login></Login>
            }
            , {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/allservice',
                element: <AllService></AllService>,
                loader: () => fetch(`https://assignment-11-server-ten-ochre.vercel.app/services`)
            },
            {
                path: '/singleservice/:id',
                element: <SingleService></SingleService>,
                loader: ({ params }) => fetch(`https://assignment-11-server-ten-ochre.vercel.app/services/${params.id}`)
            },
            {
                path: '/addservice',
                element: <AddService></AddService>,
                loader: () => fetch(`https://assignment-11-server-ten-ochre.vercel.app/services`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-ten-ochre.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews/:id',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-ten-ochre.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/editreview',
                element: <PrivateRoute><EditReview></EditReview></PrivateRoute>
            }

        ]
    }

])