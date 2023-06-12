import React from 'react';
import './Home.scss'
import Pricing from "../../components/pricing/Pricing";
import Process from "../../components/process/Process";
import Contact from "../../components/contact/Contact";
import Questions from "../../components/Questions/Questions";
import Hero from "../../components/Hero/Hero";

const Home = () => {
    return (
        <>
            <Hero/>
            <Pricing/>
            <Process/>
            <Contact/>
            <Questions/>
        </>
    );
};

export default Home;
