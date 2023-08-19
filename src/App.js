import './App.scss';
import Home from "./pages/Home/Home";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import ConfirmEmail from "./pages/ConfirmEmail/ConfirmEmail";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import UserAgreement from "./pages/UserAgreement/UserAgreement";
import PrivacyPolicyUA from "./pages/PrivacyPolicy/PrivacyPolicyUA/PrivacyPolicyUA";
import Error404 from "./pages/404/Error404";
import {Suspense} from "react";


const ProtectedRoute = ({children}) => {
    if (!localStorage.getItem('token')) {
        return <Navigate to="/login" replace/>;
    }

    return children;
};


export const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    registerReferral: '/register/:key',
    profile: '/profile',
    resetMail: '/reset-mail',
    forgotPassword: '/reset/finish/:key',
    confirmMail: '/activate/:key',
    privacyPolicy: '/privacy-policy',
    privacyPolicyUA: '/privacy-policy/ua',
    userAgreement: '/user-agreement',
}

const router = createBrowserRouter([
    {
        path: '',
        errorElement: <Error404/>,
        children: [
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
                    <Profile/>
                </ProtectedRoute>
            },
            {
                path: routes.confirmMail,
                element: <ConfirmEmail/>
            },
            {
                path: routes.privacyPolicy,
                element: <PrivacyPolicy/>
            },
            {
                path: routes.privacyPolicyUA,
                element: <PrivacyPolicyUA/>
            },
            {
                path: routes.userAgreement,
                element: <UserAgreement/>
            },
        ]
    },

]);

function App() {
    return (<Suspense fallback={<div>...Is loading</div>}>
            <RouterProvider router={router}/>
        </Suspense>
    );
}

export default App;


