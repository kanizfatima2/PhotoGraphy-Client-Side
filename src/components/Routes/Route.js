
import { createBrowserRouter } from "react-router-dom";
import AllService from "../Home Page/AllService";
import Home from "../Home Page/Home";
import Root from "./Root";

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
                path: '/allservice',
                element: <AllService></AllService>,
                loader: () => fetch(`http://localhost:5000/services`)
            }
        ]
    }

])