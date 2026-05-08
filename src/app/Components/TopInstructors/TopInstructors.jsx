import { MdSchool, MdStar } from "react-icons/md";

const TopInstructors = ({ instructors }) => {
  return (
    <section className="mt-8 px-4 pb-12">
      <h2 className="text-2xl font-bold text-gray-900">Top 5 instructors</h2>
      <p className="mt-1 text-sm text-gray-600">
        Ranked by average course rating.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {instructors.map((instructor) => (
          <article
            key={instructor.name}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            {instructor.image ? (
              <img
                src={instructor.image}
                alt={instructor.name}
                className="mb-3 h-11 w-11 rounded-full object-cover"
              />
            ) : (
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                <MdSchool className="text-xl" aria-hidden />
              </div>
            )}

            <h3 className="line-clamp-1 text-base font-semibold text-gray-900">
              {instructor.name}
            </h3>

            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-gray-500">Avg rating</span>
              <span className="flex items-center gap-1 font-semibold text-gray-800">
                <MdStar className="text-amber-400" aria-hidden />
                {instructor.avgRating}
              </span>
            </div>

            <p className="mt-2 text-xs text-gray-500">
              Courses: {instructor.coursesCount}
            </p>
            <p className="mt-1 line-clamp-2 text-xs text-gray-500">
              Top course: {instructor.topCourse}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TopInstructors;
