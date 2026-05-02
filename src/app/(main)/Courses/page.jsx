/* eslint-disable @next/next/no-img-element -- course thumbnails use plain img */
import React from 'react';
import Link from 'next/link';
import path from 'path';
import { readFile } from 'fs/promises';
import { MdStar, MdAccessTime, MdSchool } from 'react-icons/md';

export const metadata = {
    title: 'All Courses | SkillSphere',
    description: 'Browse our full library of expert-led courses and start learning today.',
};

const CoursesPage = async () => {
    const apiUrl = 'http://localhost:3000/data.json';
    const response = await fetch(apiUrl);
    const Courses = await response.json();
    console.log(Courses);
 

    return (
        <div>
            <h1>Courses</h1>
        </div>
       
    );
};

export default CoursesPage;
