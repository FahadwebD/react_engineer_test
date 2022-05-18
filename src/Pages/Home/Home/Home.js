import React from 'react';
import useData from '../../../hooks/useData';

const Home = () => {
    const {apiData} = useData()
    console.log(apiData)
    return (
        <div>
            
        </div>
    );
};

export default Home;