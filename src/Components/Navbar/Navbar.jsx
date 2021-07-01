import React from 'react'
import './Navbar.scss';
import books from '../../Images/books.png';

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      
      <div className='navbar'>
        <Link to='/'><h1>Nologer</h1></Link>
        <img src={books} alt='#'></img>
        <ul>
          <li><Link to='/studentlist'>Student List</Link></li>
          <li><Link to='/studentdetails'>Student Details</Link></li>
          <li><Link to='/createstudent'>Create New Student</Link></li>
          <li><Link to='/courses'>Course Lists</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
