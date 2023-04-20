import React from 'react';
import HomeBanner from './HomeBanner';
import Rooms from '../Rooms/Rooms';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Rooms></Rooms>
        </div>
    );
};

export default Home;