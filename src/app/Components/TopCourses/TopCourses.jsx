/* eslint-disable @next/next/no-img-element -- course thumbnails use plain img */
import Link from "next/link";
import { MdAccessTime, MdSchool, MdStar } from "react-icons/md";

const TopCourses = ({ courses }) => {
  return (
    <section className="mt-8 px-4 pb-4">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Popular Courses</h2>
          <p className="mt-1 text-sm text-gray-500">Top 3 highest-rated picks</p>
        </div>
        <Link
          href="/Courses"
          className="rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-xs font-semibold text-purple-700 transition hover:bg-purple-100"
        >
          See all →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.id}
            className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100"
          >
            <div className="relative h-44 overflow-hidden bg-purple-100">
              {course.image ? (
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <MdSchool className="text-5xl text-purple-300 transition-transform duration-300 group-hover:scale-110" />
                </div>
              )}
              {/* dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur">
                <MdStar className="text-amber-400" aria-hidden />
                {course.rating}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-5">
              <span className="w-fit rounded-full bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-700 transition group-hover:bg-purple-200">
                {course.level}
              </span>
              <h3 className="line-clamp-2 text-base font-semibold text-gray-900 transition-colors duration-200 group-hover:text-purple-700">
                {course.title}
              </h3>
              <p className="line-clamp-2 flex-1 text-sm text-gray-500">
                {course.description}
              </p>

              <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-400">
                <span className="truncate font-medium text-gray-600">{course.instructor}</span>
                <span className="flex items-center gap-1">
                  <MdAccessTime aria-hidden />
                  {course.duration}
                </span>
              </div>

              <Link
                href={`/CourseDetails/${course.id}`}
                className="mt-1 block rounded-xl bg-purple-600 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-purple-700 hover:shadow-md hover:shadow-purple-200 group-hover:bg-purple-700"
              >
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TopCourses;
