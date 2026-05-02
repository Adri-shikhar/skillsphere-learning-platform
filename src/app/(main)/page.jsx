import React from 'react';
import Banner from '../Components/Banner/Banner';
import MarqueeData from '../Components/MarqueeData/MarqueeData';

const page = () => {
    return (
        <div className='container mx-auto'>
            <Banner/>
            <MarqueeData />
        </div>
    );
};

export default page;