import React from 'react'

const CourseCard = (props) => {
  const { courseId, name } = props.courses;
  return (
    <main>
      <div className="card">
        <p>{courseId}</p>
        <p>{name}</p>
      </div>
    </main>
  )
};

export default CourseCard;
