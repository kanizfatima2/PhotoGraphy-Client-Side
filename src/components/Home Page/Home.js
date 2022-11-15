import React from 'react';
import useTitle from '../Routes/useTitle';
import Carousel from './Carousel';
import Facilities from './Facilities';
import NewAddService from './NewAddService';
import Services from './Services';
import Success from './Success';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <NewAddService></NewAddService>
            <Success></Success>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;