/* eslint-disable @next/next/no-img-element */
import { MdSchool, MdStar, MdMenuBook } from "react-icons/md";

const TopInstructors = ({ instructors }) => {
  return (
    <section className="mt-12 px-4 pb-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Top Instructors</h2>
          <p className="mt-1 text-sm text-gray-500">
            Ranked by average course rating
          </p>
        </div>
        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
          {instructors.length} instructors
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {instructors.map((instructor, i) => (
          <article
            key={instructor.name}
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
          >
            {/* rank badge */}
            <span className="absolute left-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white shadow">
              #{i + 1}
            </span>

            {/* avatar */}
            <div className="relative mb-3 mt-2">
              {instructor.image ? (
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-purple-200 ring-offset-2"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 ring-2 ring-purple-200 ring-offset-2">
                  <MdSchool className="text-2xl text-purple-600" aria-hidden />
                </div>
              )}
              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 shadow">
                <MdStar className="text-xs text-white" aria-hidden />
              </span>
            </div>

            <h3 className="line-clamp-1 text-center text-sm font-semibold text-gray-900">
              {instructor.name}
            </h3>

            <div className="mt-2 flex items-center gap-1 text-sm font-bold text-amber-500">
              <MdStar aria-hidden />
              {instructor.avgRating}
            </div>

            <div className="mt-3 w-full space-y-1.5 border-t border-gray-100 pt-3">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <MdMenuBook className="text-purple-400" aria-hidden />
                  Courses
                </span>
                <span className="font-semibold text-gray-700">{instructor.coursesCount}</span>
              </div>
              <p className="line-clamp-2 text-center text-[11px] italic text-gray-400">
                &ldquo;{instructor.topCourse}&rdquo;
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TopInstructors;
