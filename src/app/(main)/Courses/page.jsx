import React from "react";
import coursesData from "../../../../public/data.json";
import CoursesHero from "../../Components/CoursesHero/CoursesHero";
import CoursesCatalog from "../../Components/CoursesCatalog/CoursesCatalog";

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'All Courses | SkillSphere',
    description: 'Browse our full library of expert-led courses and start learning today.',
};

const CoursesPage = async () => {
    const courses = Array.isArray(coursesData) ? coursesData : [];

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-10 pb-16">
                <CoursesHero count={courses.length} />

                <CoursesCatalog courses={courses} />
            </div>
        </main>
    );
};

export default CoursesPage;
