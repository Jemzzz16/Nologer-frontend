import React from "react";
import "./Routes.scss";
import { Switch, Route } from 'react-router-dom';
import StudentDetails from '../../Components/StudentDetails/Studentdetails';
import CreateStudent from '../../Components/CreateStudent/CreateStudent';
import Home from '../Home/Home';
import Courses from '../Courses/Courses';
import Students from '../Students/Students';


const Routes = () => {
  return (
    <Switch>
      <Route path='/studentdetails'>
        <StudentDetails />
      </Route>
      <Route path="/student/:id">
        <StudentDetails />
      </Route>
      <Route path='/createstudent'>
        <CreateStudent />
      </Route>
      <Route path='/courses'>
        <Courses />
      </Route>
      <Route path='/students'>
        <Students />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;