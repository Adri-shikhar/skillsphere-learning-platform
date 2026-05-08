import Link from "next/link";
import { MdAccessTime, MdStar } from "react-icons/md";

const TopCourses = ({ courses }) => {
  return (
    <section className="mt-8 px-4 pb-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Top 3 courses</h2>
        <Link
          href="/Courses"
          className="text-sm font-semibold text-purple-600 hover:text-purple-700"
        >
          See all
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.id}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-700">
                {course.level}
              </span>
              <span className="flex items-center gap-1 text-sm font-semibold text-gray-800">
                <MdStar className="text-amber-400" aria-hidden />
                {course.rating}
              </span>
            </div>

            <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">
              {course.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-gray-600">
              {course.description}
            </p>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span className="truncate">{course.instructor}</span>
              <span className="flex items-center gap-1">
                <MdAccessTime className="text-gray-400" aria-hidden />
                {course.duration}
              </span>
            </div>

            <Link
              href={`/CourseDetails/${course.id}`}
              className="mt-4 inline-block rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              CourseDetails
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TopCourses;
