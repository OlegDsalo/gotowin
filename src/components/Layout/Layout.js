import React from 'react';
import classes from "./Layout.module.scss";
import {Outlet} from "react-router-dom";
import Footer from "../../components-ui/Footer/Footer";

const Layout = () => {
    return (
        <div className={classes.layout}>
            <Outlet/>
            <Footer/>
        </div>

    );
};

export default Layout;
