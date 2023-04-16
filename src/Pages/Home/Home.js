import React from 'react';
import Services from '../Services/Services';
import About from '../About/About';
import Experiences from '../Experiences/Experiences';
import Works from '../Works/Works';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='z-30'>
            <About></About>
            <Services></Services>
            <Experiences></Experiences>
            <Works></Works>
            <Contact></Contact>
        </div>
    );
};

export default Home;