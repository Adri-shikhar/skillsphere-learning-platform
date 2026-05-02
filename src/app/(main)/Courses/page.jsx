import React from 'react';

const Courses = async () => {

    const api=await fetch(`http://localhost:3000/data.json`);
    const courses=await api.json();
    console.log(courses);

    
    return (
        <div className='container mx-auto'>
            <h1>Courses</h1>
            <p>This is the Courses page.</p>
            {courses.map((course)=>(
                <div key={course.id}>
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <p>{course.instructor}</p>
                    <p>{course.duration}</p>
                    <p>{course.rating}</p>
                </div>
            ))}
        </div>
    );
};

export default Courses;