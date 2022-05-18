import React from 'react';
import useData from '../../../hooks/useData';
import Navbar from '../../Shared/Navbar/Navbar';
import DataCard from '../Data/DataCard/DataCard';

const Home = () => {
    const {apiData} = useData()
    console.log(apiData)
    return (
        <div>
            <Navbar></Navbar>
            <DataCard></DataCard>
        </div>
    );
};

export default Home;