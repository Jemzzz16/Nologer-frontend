import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const StudentDetails = () => {
  let { id } = useParams();

  const [student, setStudents] = useState({});

  useEffect(() => {
    console.log(id);
    fetch("http://localhost:8080//students/{studentId}")
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setStudents(jsonResponse);
      });
  }, [id]);

  return (
    <div>
      <h3>student details</h3>
      <p>{student.firstName}</p>
      <p>{student.lastName}</p>
      <p>{student.age}</p>
      <p>{student.location}</p>
      <p>{student.interests}</p>
    </div>
  )
}

export default StudentDetails;
