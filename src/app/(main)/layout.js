import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import MarqueeData from '../Components/MarqueeData/MarqueeData';

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        
        </div>
    );
};

export default Mainlayout;