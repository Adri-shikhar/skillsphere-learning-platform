/* eslint-disable @next/next/no-img-element -- remote course image source */
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdAccessTime, MdCategory, MdSchool, MdStar } from "react-icons/md";

const CourseDetailsPage = async ({ params }) => {
  const { id: idParam } = await params;
  const id = Number(idParam);
  if (!Number.isFinite(id)) notFound();

  const api = "https://skillsphere-learning-platform.vercel.app/data.json";
  const courses = await fetch(api).then((res) => res.json());
  const course = courses.find((c) => c.id === id);
  if (!course) notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-10 pb-16">
        <Link
          href="/Courses"
          className="mb-6 inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
        >
          Back to courses
        </Link>

        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="h-64 bg-purple-100 md:h-full">
                {course.image ? (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-purple-300">
                    <MdSchool className="text-7xl" />
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="p-6 md:p-8">
                <p className="mb-2 text-sm font-medium text-purple-600">
                  Course #{course.id}
                </p>
                <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  {course.title}
                </h1>
                <p className="mt-3 text-gray-600">{course.description}</p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                  <div className="rounded-lg bg-gray-100 p-3">
                    <p className="flex items-center gap-1 font-semibold text-gray-700">
                      <MdSchool /> Instructor
                    </p>
                    <p className="mt-1 text-gray-600">{course.instructor}</p>
                  </div>
                  <div className="rounded-lg bg-gray-100 p-3">
                    <p className="flex items-center gap-1 font-semibold text-gray-700">
                      <MdAccessTime /> Duration
                    </p>
                    <p className="mt-1 text-gray-600">{course.duration}</p>
                  </div>
                  <div className="rounded-lg bg-gray-100 p-3">
                    <p className="flex items-center gap-1 font-semibold text-gray-700">
                      <MdStar /> Rating
                    </p>
                    <p className="mt-1 text-gray-600">{course.rating}</p>
                  </div>
                  <div className="rounded-lg bg-gray-100 p-3">
                    <p className="flex items-center gap-1 font-semibold text-gray-700">
                      <MdCategory /> Level
                    </p>
                    <p className="mt-1 text-gray-600">{course.level}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    What you will learn
                  </h2>
                  <p className="mt-2 text-gray-600">{course.fullDescription}</p>
                </div>

                <div className="mt-6">
                  <h3 className="text-base font-semibold text-gray-900">
                    Curriculum
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {course.curriculum.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    className="rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
                  >
                    Install course
                  </button>
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                    {course.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default CourseDetailsPage;