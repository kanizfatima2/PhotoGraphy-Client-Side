import React from 'react';
import Carousel from './Carousel';
import Facilities from './Facilities';
import Services from './Services';
import Success from './Success';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <Success></Success>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;