import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Rooms from "../Rooms/Rooms";
import BookRoom from "../BookRoom/BookRoom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
            {
                path: '/:id',
                element: <BookRoom></BookRoom>
            }


        ]
    }
])

export default router;