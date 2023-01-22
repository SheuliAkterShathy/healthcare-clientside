import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from './Doctors';
import Exceptional from './Exceptional';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Exceptional></Exceptional>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;