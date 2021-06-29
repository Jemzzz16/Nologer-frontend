import React, { useState } from 'react'
import Card from '../../Components/Card/Card';
import './StudentList.scss';

const StudentList = () => {
  const [ student, setStudent ] = useState('');
  
  const getStudentAPI = async () => {
    const response = await fetch('http://localhost:8080/students');
    const student = await response.json();
    setStudent(student);
  };

  const getStudent = (student) => {
    return <Card student={student} />
  }
  return (
    <div>
      {getStudentAPI}
      <section>
        {getStudent}
      </section>
    </div>
  )
}

export default StudentList
