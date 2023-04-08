import React from 'react';
import Services from '../Services/Services';
import About from '../About/About';
import Experiences from '../Experiences/Experiences';
import Works from '../Works/Works';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <About></About>
            <Experiences></Experiences>
            <Works></Works>
            <Contact></Contact>
        </div>
    );
};

export default Home;