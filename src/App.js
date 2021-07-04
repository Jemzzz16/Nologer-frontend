import './App.scss';
import React from "react";
import Routes from '../src/Containers/Routes/Routes';
import Navbar from '../src/Components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
