import * as React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/login/Login";
import CustomAppBar from "./Components/AppBar/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./Components/AppBar/SideBar";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Setting from "./Components/Pages/Setting/Setting";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   {/* <NavBar  /> */}
    //   {/*<Login />*/}
    // </div>
  );
}

export default App;
