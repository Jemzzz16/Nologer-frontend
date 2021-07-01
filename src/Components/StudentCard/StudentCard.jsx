import React from "react";
import "./StudentCard.scss";

const StudentCard = (props) => {
  const { firstName, lastName, age, location } = props.students;

  return (
    <main>
      <div className='card'>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{age}</p>
        <p>{location}</p>
      </div>
    </main>
  );
};

export default StudentCard;