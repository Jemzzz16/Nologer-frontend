import React, { useState, useEffect } from 'react'
import CourseCard from '../../Components/CourseCard/CourseCard';

const Courses = () => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/courses")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setCourseList(jsonResponse);
      });
  }, []);

  const getCourse = (courses) => {
    return (
        <CourseCard courses={courses} />
    );
  };
  
  return (
    <>
      <div className='container'>
        <h1> Our Courses </h1>
          {courseList.map(getCourse)}
      </div>
    </>
  );
};

export default Courses
