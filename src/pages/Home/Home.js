import React, {useState} from 'react';
import classes from './Home.module.scss'
import Pricing from "../../components/Pricing/Pricing";
import Process from "../../components/Process/Process";
import Contact from "../../components/Contact/Contact";
import Questions from "../../components/Questions/Questions";
import Hero from "../../components/Hero/Hero";
import Header from "../../components-ui/Header/Header";
import Footer from "../../components-ui/Footer/Footer";
import useAsyncEffect from "../../utils/AsyncEffect";
import accountServiceInstance from "../../service/AccountService";
import PageTitle from "../../utils/pageTitle";

const Home = () => {
    const [user, setUser] = useState(null)
    useAsyncEffect(() => {
        if (localStorage.getItem('token')) {
            try {
                const responce = accountServiceInstance.getUser();
                setUser(responce)
            } catch (e) {
                localStorage.removeItem('token')
            }
        }
    }, [])
    return (
        <div className={classes.home}>
            <PageTitle title='Home'></PageTitle>
            <div className={classes.wrapper}>
                <Header user={user}></Header>
                <Hero/>
            </div>
            <Pricing/>
            <Process/>
            <Contact/>
            <Questions/>
            <Footer/>
        </div>
    );
};

export default Home;
