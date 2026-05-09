import React from "react";
import Marquee from "react-fast-marquee";
import { MdFiberNew } from "react-icons/md";

const newsItems = [
  "🚀 Complete Web Development Bootcamp just hit 10,000 enrollments!",
  "🎨 UI/UX Design Masterclass just hit 5,000 enrollments!",
  "🤖 Python for Data Science just hit 3,000 enrollments!",
  "📈 Digital Marketing 101: SEO & Social Media just hit 2,000 enrollments!",
  "⚛️ Advanced React & Next.js Patterns just hit 1,000 enrollments!",
  "🔐 Ethical Hacking Fundamentals is trending this week!",
];

const MarqueeData = () => {
  return (
    <div className="mx-4 mb-6 flex items-center gap-0 overflow-hidden rounded-xl border border-purple-200 bg-purple-50 shadow-sm">
      <div className="flex shrink-0 items-center gap-1.5 border-r border-purple-200 bg-purple-600 px-4 py-3 text-xs font-bold uppercase tracking-widest text-white">
        <MdFiberNew className="text-lg" aria-hidden />
        Latest
      </div>
      <Marquee pauseOnHover pauseOnClick speed={60} className="py-3">
        {newsItems.map((item, index) => (
          <span
            key={index}
            className="mx-10 text-sm font-medium text-purple-800"
          >
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeData;
