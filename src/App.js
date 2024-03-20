import * as React from "react";
import "./App.css";
import Login from "./Components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./Components/AppBar/SideBar";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Setting from "./Components/Pages/Setting/Setting";
import Profile from "./Components/Pages/Profile/Profile";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Logout from "./Components/Pages/Logout/Logout";
import ForgotPassword from "./Components/Pages/ForgotPassword";
function App() {
  return (
    <BrowserRouter>
        {/* <SideBar/> */}
   
      <Routes>
        <Route path="/home" element={<SideBar><Home /></SideBar>} />
        <Route path="/about" element={<SideBar><About /></SideBar>} />
        <Route path="/settings" element={<SideBar><Setting /></SideBar>} />
        <Route path="/profile" element={<SideBar><Profile /></SideBar>} />
        <Route path="/dashboard" element={<SideBar><Dashboard /></SideBar>} />
        <Route path="/logout" element={<SideBar><Logout /></SideBar>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   {/* <NavBar  /> */}
    //   {/*<Login />*/}
    // </div>
  );
}

export default App;
