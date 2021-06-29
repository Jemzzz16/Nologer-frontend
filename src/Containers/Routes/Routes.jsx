import React from "react";
import "./Routes.scss";
import { Switch, Route } from 'react-router-dom';

import Home from '../../Components/Home/Home';
import Student from '../Student/Student';
import StudentList from '../StudentList/StudentList';


const Routes = () => {
  return (
    <Switch>
      <Route path='/Student'>
        <Student />
      </Route>
      <Route path='/StudentList'>
        <StudentList />
      </Route>

      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;