import React, {useEffect, useState} from 'react'
import StudentCard from '../../Components/StudentCard/StudentCard';

const StudentDetails = () => {
  const [studentList, setStudentList] = useState([]); // we want ONE student, so this is "student" not "studentList"

  // 2. How can we get the ID of this student from the URL? hint: useParams();

  useEffect(() => {
    fetch("http://localhost:8080/students") // <-- if this stays in details, it needs ONE student, not ALL students
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
          <button>Add new Student</button>
          {studentList.map(getStudent)}
          <button>View</button>
          <button>Delete</button>
      </div>
    </>
  );
}

export default StudentDetails;