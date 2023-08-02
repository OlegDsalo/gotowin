import './App.scss';
import Home from "./pages/Home/Home";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import User from "./pages/User/User";
import ConfirmEmail from "./pages/ConfirmEmail/ConfirmEmail";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";


const ProtectedRoute = ({children}) => {
    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" replace/>;
    }

    return children;
};


// export const routes = {
//     home:'/',
//     login:'/login',
//     register:'/register',
//     profile: '/profile',
//     resetMail:'/reset-mail',
//     forgotPassword: '/reset/finish/:key',
//     confirmMail: '/activate/:key',
//     navigateTo:(route)=>{
//         navigate(route)
//     }
// }
export const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    registerReferral: '/register/:key',
    profile: '/profile',
    resetMail: '/reset-mail',
    forgotPassword: '/reset/finish/:key',
    confirmMail: '/activate/:key',
}

const router = createBrowserRouter([
    {
        path: routes.home,
        index: true,
        element: <Home/>
    },
    {
        path: routes.login,
        element: <Login/>
    },
    {
        path: routes.register,
        element: <Register/>
    },
    {
        path: routes.registerReferral,
        element: <Register/>
    },
    {
        path: routes.resetMail,
        element: <ForgotPassword/>
    },
    {
        path: routes.forgotPassword,
        element: <ResetPassword/>
    },
    {
        path: routes.profile,
        element: <ProtectedRoute>
            <User/>
        </ProtectedRoute>
    },
    {
        path: routes.confirmMail,
        element: <ConfirmEmail/>
    }
]);

function App() {


    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         // element: <Layout/>,
    //         children: [
    //             {
    //                 index: true,
    //                 element: <Home/>
    //             },
    //             {
    //                 path: 'login',
    //                 element: <Login/>
    //             },
    //             {
    //                 path: 'register',
    //                 element: <Register/>
    //             },
    //             {
    //                 path: 'reset-mail',
    //                 element: <ForgotPassword/>
    //             },
    //             {
    //                 path: 'reset/finish/:key',
    //                 element: <ResetPassword/>
    //             }
    //         ]
    //     },
    //     {
    //         path: '/profile',
    //         element: <ProtectedRoute>
    //             <User/>
    //         </ProtectedRoute>
    //     },
    //     {
    //         path: '/activate/:key',
    //         element: <ConfirmEmail/>
    //     }
    // ]);
    return (
        <RouterProvider router={router}/>
    );
}

export default App;


