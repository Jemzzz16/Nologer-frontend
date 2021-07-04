import React, { useEffect, useState } from 'react'
import StudentCard from '../../Components/StudentCard/StudentCard';
import { Link } from "react-router-dom";

const Students = () => {
  const [student, setStudent] = useState([]); // we want ONE student, so this is "student" not "studentList"

  // 2. How can we get the ID of this student from the URL? hint: useParams();

  useEffect(() => {
    fetch("http://localhost:8080/students") // <-- if this stays in details, it needs ONE student, not ALL students
      .then((response) => response.json())
      .then((jsonResponse) => {
        setStudent(jsonResponse);
      });
  }, []);

  const getStudent = (student) => {
    return (
        <StudentCard student={student} />
    );
  };
  
  


  return (
    <>
      <div className='container'>
        <h1> Students </h1>
          <button><Link to='/createstudent'>Add new Student</Link></button>
          {student.map(getStudent)}
          
      </div>
    </>
  );
};

export default Students;
