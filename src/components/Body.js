import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
// parent compo.
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />

        },
        {
            path: "/browse",
            element: <Browse />

        },

    ])


    return (
        <div>
            <RouterProvider router={appRouter}>
            </RouterProvider>
        </div>
    )
}
export default Body