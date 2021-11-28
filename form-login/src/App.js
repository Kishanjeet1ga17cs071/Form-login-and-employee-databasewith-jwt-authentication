import logo from './logo.svg';
import React, { useState } from "react";
//import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login2 from './Components/Login2';
import AddEmp from './Components/AddEmp';
import EmployeGrid from './Components/EmployeGrid'
import AddEmp2 from './Components/AddEmp2'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
     <Routes>
      
       <Route  path ="/login2" element ={<Login2 />} /> 
       <Route  path ="/add" element ={<AddEmp />} /> 
       <Route  path ="/Grid" element ={<EmployeGrid />} /> 
       <Route  path ="/add2" element ={<AddEmp2 />} /> 
      

     </Routes>
    </div>
    </BrowserRouter>
 
  );
}

export default App;
