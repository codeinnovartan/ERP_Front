import * as React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Login from './Components/login/Login';
import { AppBar } from '@mui/material';
import CustomAppBar from './Components/AppBar/AppBar';


function App() {
  return (
    <div className="App">
      {/* <NavBar  /> */}
      {/*<Login />*/}
      <CustomAppBar />      
    </div>
  );
}

export default App;
