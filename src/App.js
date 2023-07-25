import './App.scss';
import Home from "./pages/Home/Home";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import User from "./pages/User/User";
import ConfirmEmail from "./pages/ConfirmEmail/ConfirmEmail";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            // element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    path: 'login',
                    element: <Login/>
                },
                {
                    path: 'register',
                    element: <Register/>
                },
                {
                    path: 'reset-mail',
                    element: <ForgotPassword/>
                },
                {
                    path: 'reset/finish/:key',
                    element: <ResetPassword/>
                }
            ]
        },
        {

            path: '/profile',
            element: <ProtectedRoute>
                <User/>
            </ProtectedRoute>
        },
        {
            path: '/activate/:key',
            element: <ConfirmEmail/>
        }
    ]);
    return (
        <RouterProvider router={router}/>
    );
}

export default App;


const ProtectedRoute = ({children}) => {
    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" replace/>;
    }

    return children;
};
