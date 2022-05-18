import React from 'react';
import useData from '../../../hooks/useData';
import Navbar from '../../Shared/Navbar/Navbar';

const Home = () => {
    const {apiData} = useData()
    console.log(apiData)
    return (
        <div>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;