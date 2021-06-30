import React, { useState, useEffect } from 'react';

import './StudentList.scss';

const StudentList = () => {
  const [ student, setStudent] = useState('')
  const studentAPI = async () => {
    const response = await fetch('http://localhost:8080/students');
    const student = await response.json();
    setStudent(student)
    return console.log(student);
  }
  useEffect(() => {
    studentAPI('');
  }, []);

  // const getStudent = (student) => {
  //   return student
  // }

  return (
    <div>
      <section>
        {/* {getStudent} */}
        
      </section>
    </div>
  )
}

export default StudentList
