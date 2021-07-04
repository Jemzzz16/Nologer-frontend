import React from "react";
import "./StudentCard.scss";
import { Link } from "react-router-dom";

const StudentCard = (props) => {
  const student = props.student;

  const handleDelete = () => {
    const options = {
      method: "delete",
    };

    fetch(`http://localhost:8080//students/{studentId}`, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });

    props.toggleDelete();
  };

  return (
    <main>
      <div className='card'>
        <p><Link to='/studentdetails'>{student.firstName}</Link></p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </main>
  );
};

export default StudentCard;