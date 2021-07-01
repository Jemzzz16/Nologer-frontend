import React from "react";
import "./Routes.scss";
import { Switch, Route } from 'react-router-dom';
import Studentdetails from '../Studentdetails/Studentdetails';
import StudentList from '../StudentList/StudentList';
import CreateStudent from '../createstudent/CreateStudent';
import Home from '../Home/Home';
import Courses from '../Courses/Courses';


const Routes = () => {
  return (
    <Switch>
      <Route path='/Studentdetails'>
        <Studentdetails />
      </Route>
      <Route path='/studentlist'>
        <StudentList />
      </Route>
      <Route path='/createstudent'>
        <CreateStudent />
      </Route>
      <Route path='/courses'>
        <Courses />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;