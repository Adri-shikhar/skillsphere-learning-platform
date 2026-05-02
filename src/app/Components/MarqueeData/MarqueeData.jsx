import React from "react";
import Marquee from "react-fast-marquee";

const newsItems = [
  "Complete Web Development Bootcamp just hit 10,000 enrollments!",
  "UI/UX Design Masterclass just hit 5,000 enrollments!",
  "Python for Data Science just hit 3,000 enrollments!",
  "Digital Marketing 101: SEO & Social Media just hit 2,000 enrollments!",
  "Advanced React & Next.js Patterns just hit 1,000 enrollments!",
];

const MarqueeData = () => {
  return (
    <div className="bg-gray-200 p-4 flex items-center justify-between mx-auto container">
      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Latest
      </button>
      <Marquee pauseOnHover pauseOnClick speed={100}>
        {newsItems.map((item, index) => (
          <span key={index} className="mx-10 text-black font-bold">
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeData;
