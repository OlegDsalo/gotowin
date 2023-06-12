import React from 'react';
import classes from "./Layout.module.scss";
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";

const Layout = () => {
    return (
        <div className={classes.layout}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>

    );
};

export default Layout;
