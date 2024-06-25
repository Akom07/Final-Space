import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Details from './pages/Details';
import Allcharacter from './pages/Allcharacter';
function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Allcharacter />,
        }, {
            path: "/:id",
            element: <Details />,
        },
    ]);
    return (
        <RouterProvider router={router} />
    )
}

export default Router