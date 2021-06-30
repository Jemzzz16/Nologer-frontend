import React from "react";
import "./Routes.scss";
import { Switch, Route } from 'react-router-dom';
import Studentdetails from '../Studentdetails/Studentdetails';
import StudentList from '../StudentList/StudentList';
import CreateStudent from '../createstudent/CreateStudent';


const Routes = () => {
  return (
    <Switch>
      <Route path='/Studentdetails'>
        <Studentdetails />
      </Route>
      <Route path='/StudentList'>
        <StudentList />
      </Route>
      <Route path='/createstudent'>
        <CreateStudent />
      </Route>
    </Switch>
  );
};

export default Routes;