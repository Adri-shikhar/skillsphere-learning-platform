/* eslint-disable @next/next/no-img-element -- course thumbnails use plain img */
import React from "react";
import Link from "next/link";
import { MdStar, MdAccessTime, MdSchool } from "react-icons/md";
import CoursesHero from "../../Components/CoursesHero/CoursesHero";

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'All Courses | SkillSphere',
    description: 'Browse our full library of expert-led courses and start learning today.',
};

const CoursesPage = async () => {
   const api = 'https://skillsphere-learning-platform.vercel.app/data.json';
   const courses = await fetch(api).then((res) => res.json());

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-10 pb-16">
                <CoursesHero count={courses.length} />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {courses.map((course) => {
                        const { id, title, instructor, duration, rating, level, description, image, category } = course;
                        return (
                            <article
                                key={id}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100"
                            >
                                <div className="relative h-40 overflow-hidden bg-purple-100">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={title}
                                            loading="lazy"
                                            decoding="async"
                                            className="relative z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full items-center justify-center">
                                            <MdSchool className="text-5xl text-purple-300 transition-transform duration-300 group-hover:scale-110" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                                    <span className="absolute left-2 top-2 rounded-full bg-black/50 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur">
                                        {category}
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col gap-2 p-4">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="rounded-full bg-gray-100 px-2 py-0.5 font-medium text-gray-700">
                                            {level}
                                        </span>
                                        <span className="flex items-center gap-0.5 font-semibold text-gray-800">
                                            <MdStar className="text-amber-400" aria-hidden />
                                            {rating}
                                        </span>
                                    </div>
                                    <h2 className="line-clamp-2 text-base font-semibold text-gray-900 transition-colors duration-200 group-hover:text-purple-700">{title}</h2>
                                    <p className="line-clamp-2 flex-1 text-xs text-gray-500">{description}</p>
                                    <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-400">
                                        <span className="truncate font-medium text-gray-600">{instructor}</span>
                                        <span className="flex shrink-0 items-center gap-1">
                                            <MdAccessTime aria-hidden />
                                            {duration}
                                        </span>
                                    </div>
                                    <Link
                                        href={`/CourseDetails/${id}`}
                                        className="mt-1 block rounded-xl bg-purple-600 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-purple-700 hover:shadow-md hover:shadow-purple-200 group-hover:bg-purple-700"
                                    >
                                        View details
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default CoursesPage;
