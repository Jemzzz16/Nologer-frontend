import React, {useEffect, useState} from 'react'
import {
    useParams
  } from "react-router-dom";

const StudentDetails = () => {

    let { id } = useParams();
    const [student, setStudent] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/students/" + id)
            .then(res => res.json())
            .then((res) => {
                setStudent(res);
            })
    }, [])

    return (
        <div>
            <h1>{student.firstName} {student.lastName}</h1>
        </div>
    )
}

export default StudentDetails;