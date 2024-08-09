import { useState } from "react";
import Login from "./components/Login";
import Alert from "./components/Alert";
import Home from "./components/Home";
import AboutMe from "./components/AboutMeV2";
import Portfolio from "./components/Portfolio";
import express from "express";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

let text = "I have been clicked";

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path="/" element={<Home />} />

          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/Home" element={<Home />} />

          <Route path="/Portfolio" element={<Portfolio />} />

          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/AboutMe" element={<AboutMe />} />

          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          {/* <Redirect to="/" /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      {/* <div>
        <Login></Login>
      </div> */}
    </>
  );
}

export default App;
