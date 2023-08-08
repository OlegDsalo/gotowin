import React from 'react';
import Header from "../../components-ui/Header/Header";
import Footer from "../../components-ui/Footer/Footer";
import classes from'./Error404.module.scss'
import Button from "../../components-ui/Button/Button";
import {useAppNavigation} from "../../hook/useAppNavigation";
import PageTitle from "../../utils/pageTitle";

const Error404 = () => {
    const {navigateToHome} = useAppNavigation()
    return (
        <div className={classes.wrapper}>
            <PageTitle title='404'></PageTitle>
            <Header/>
            <div className={classes.content}>
                <div className={classes.code}>
                </div>
                <div className={classes.title}>
                    Page Not Found
                </div>
                <div className={classes.action}>
                    <Button onClick={navigateToHome}>Home</Button>
                </div>
            </div>

            <Footer/>
            <div className={classes.error_bg}></div>

        </div>
    );
};

export default Error404;
