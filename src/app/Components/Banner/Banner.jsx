"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    headline: "Upgrade Your Skills Today 🚀",
    sub: "Learn from industry experts and build real-world projects at your own pace.",
    bg: "from-purple-700 via-violet-700 to-indigo-800",
    primaryHref: "/Courses",
    primaryLabel: "Browse Courses",
    secondaryHref: "/Registration",
    secondaryLabel: "Sign up free",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Developer coding on a laptop",
  },
  {
    id: 2,
    headline: "Learn from Industry Experts 🎓",
    sub: "20+ courses across Design, Development, Data Science, Marketing and more.",
    bg: "from-blue-700 via-cyan-700 to-teal-700",
    primaryHref: "/Courses",
    primaryLabel: "Explore Courses",
    secondaryHref: "/Registration",
    secondaryLabel: "Get started",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Designer working on UI",
  },
  {
    id: 3,
    headline: "Build Skills That Matter 💡",
    sub: "Structured curriculums, top instructors, and progress you can actually see.",
    bg: "from-rose-600 via-pink-600 to-purple-700",
    primaryHref: "/Courses",
    primaryLabel: "Start Learning",
    secondaryHref: "/Registration",
    secondaryLabel: "Join SkillSphere",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500&q=80",
    imageAlt: "Data science charts and graphs",
  },
];

const Banner = () => {
  return (
    <section className="mt-6 mb-10 overflow-hidden rounded-2xl mx-4">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`bg-linear-to-br ${slide.bg} flex flex-col md:flex-row items-center gap-8 px-8 py-12 md:py-16 md:px-14`}
            >
              {/* Text */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white md:text-4xl leading-tight">
                  {slide.headline}
                </h1>
                <p className="text-white/80 text-sm md:text-base max-w-md mx-auto md:mx-0">
                  {slide.sub}
                </p>
                <div className="flex flex-wrap justify-center gap-3 md:justify-start pt-2">
                  <Link
                    href={slide.primaryHref}
                    className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-purple-700 shadow hover:bg-gray-100 transition-colors"
                  >
                    {slide.primaryLabel}
                  </Link>
                  <Link
                    href={slide.secondaryHref}
                    className="rounded-lg border border-white/50 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                  >
                    {slide.secondaryLabel}
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="w-full max-w-sm flex-1 shrink-0">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="w-full rounded-xl shadow-2xl object-cover aspect-video"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
