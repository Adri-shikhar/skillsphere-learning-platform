import React from 'react';
import { notFound } from 'next/navigation';

const CourseDetailsPage = async ({ params }) => {
    const { id: idParam } = await params;
    const id = Number(idParam);
    if (!Number.isFinite(id)) notFound();

    const api = 'https://skillsphere-learning-platform.vercel.app/data.json';
    const courses = await fetch(api).then((res) => res.json());
    const course = courses.find((c) => c.id === id);
    if (!course) notFound();

    return (
    <div className='container mx-auto'>
      <h1 className='text-2xl font-bold'>Course Details</h1>
      <p className="text-gray-600">Course ID: {id}</p>
      <h2 className='text-xl font-bold'>{course.title}</h2>
      <p className='text-gray-600'>Instructor: {course.instructor}</p>
      <p className='text-gray-600'>Duration: {course.duration}</p>
      <p className='text-gray-600'>Rating: {course.rating}</p>
      <p className='text-gray-600'>Level: {course.level}</p>
      <p className='text-gray-600'>Description: {course.description}</p>
      <p className='text-gray-600'>Image: {course.image}</p>
      <p className='text-gray-600'>Category: {course.category}</p>
      <p className='text-gray-600'>Full Description: {course.fullDescription}</p>
      <p className='text-gray-600'>Curriculum: {course.curriculum.join(', ')}</p>
    </div>
  )
}

export default CourseDetailsPage