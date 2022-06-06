import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Steps from '../Steps/Steps';
import Why from '../Why/Why';


const Home = () => {
    return (
        <div>
            <Hero />
            <Steps />
            <AboutUs />
            <Why />
            <Contact />
        </div>
    );
};

export default Home;