import React from 'react'
import studentpic from '../../Images/students.jpeg';
import { Link } from "react-router-dom";
import './Home.scss';



const Home = () => {
  return (
    <div className='main'>
      <h2>Welcome students!</h2>
      <img src={studentpic} alt='#'></img>
      <div className='list'>
          <p><Link to='/students'>Student's</Link></p>
          <p><Link to='/courses'>Courses</Link></p>
        </div>
      
    </div>
  )
}

export default Home
