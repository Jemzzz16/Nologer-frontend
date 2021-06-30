import React from 'react'
import './Navbar.scss';

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      
      <div className='navbar'>
        <h3>Nologer</h3>
        <ul>
          <li><Link to='/studentlist'>Student List</Link></li>
          <li><Link to='/studentdetails'>Student Details</Link></li>
          <li><Link to='/createstudent'>Create New Student</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
