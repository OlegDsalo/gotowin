import React from 'react';
import classes from './Home.module.scss'
import Pricing from "../../components/Pricing/Pricing";
import Process from "../../components/Process/Process";
import Contact from "../../components/Contact/Contact";
import Questions from "../../components/Questions/Questions";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <div className={classes.home}>
            <div className={classes.wrapper}>
                <Header></Header>
                <Hero/>
            </div>
            <Pricing/>
            <Process/>
            <Contact/>
            <Questions/>
        </div>
    );
};

export default Home;
