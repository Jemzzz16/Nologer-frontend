import React, { useState, useEffect } from 'react';
import StudentCard from "../../Components/StudentCard/StudentCard";
import StudentDetails from "../../Containers/Studentdetails/Studentdetails";


import './StudentList.scss';

const StudentList = () => {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setStudentList(jsonResponse);
      });
  }, []);

  const getStudent = (students) => {
    return (
        <StudentCard students={students} />
    );
  };
  
  return (
    <>
      <div className='container'>
        <h1> Students </h1>
          {studentList.map(getStudent)}
          <StudentDetails />
          <button>View</button>
          <button>Delete</button>
      </div>
    </>
  );
};

export default StudentList;
