import './App.scss';
import Home from "./pages/Home/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import User from "./pages/User/User";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
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
                }
            ]
        },
        {
            path:'/user',
            // /path:'/user/:id'
            element:<User/>
        }

    ]);
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
