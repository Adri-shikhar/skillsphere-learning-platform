import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Marquee from 'react-fast-marquee';   
import MarqueeData from '../Components/MarqueeData/MarqueeData';

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <MarqueeData />
            {children}
        </div>
    );
};

export default Mainlayout;