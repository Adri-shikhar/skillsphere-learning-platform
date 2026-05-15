"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdAccessTime, MdSchool, MdStar, MdSearch } from "react-icons/md";


function doesCourseMatchSearch(course, searchText) {
  const query = searchText.trim().toLowerCase();
  if (query === "") {
    return true;
  }


  const combined = [
    course.title,
    course.instructor,
    course.category,
    course.level,
    course.description,
    course.duration,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();


  const words = query.split(/\s+/).filter(Boolean);

  return words.every((word) => combined.includes(word));
}

function CourseCard({ course }) {
  const {
    id,
    title,
    instructor,
    duration,
    rating,
    level,
    description,
    image,
    category,
  } = course;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100">
      <div className="relative h-40 overflow-hidden bg-purple-100">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element -- remote thumbnail URLs
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
        <h2 className="line-clamp-2 text-base font-semibold text-gray-900 transition-colors duration-200 group-hover:text-purple-700">
          {title}
        </h2>
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
}

export default function CoursesCatalog({ courses }) {
  
  const [searchQuery, setSearchQuery] = useState("");

  const allCourses = Array.isArray(courses) ? courses : [];

  const filteredCourses = allCourses.filter((course) =>
    doesCourseMatchSearch(course, searchQuery),
  );

  return (
    <>
      <div className="mb-8">
        <label
          htmlFor="courses-search"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Search courses
        </label>
        <div className="relative max-w-xl">
          <MdSearch
            className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            aria-hidden
          />
          <input
            id="courses-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search by title, topic, or instructor..."
            autoComplete="off"
            className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          />
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Showing {filteredCourses.length} of {allCourses.length} courses
        </p>
      </div>
      
      {filteredCourses.length === 0 ? (
        <p className="rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center text-gray-600">
          No courses match your search. Try different keywords.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </>
  );
}
