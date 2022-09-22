import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Employees from "./Employees";
import AddEmployee from "./AddEmployee";
import EmployyeeDetails from "./EmployyeeDetails";
import Layout from "./Layout";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route Path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="/PhoneList" element={<Employees/>}></Route>
            <Route path="/PhoneList/:id" element={<EmployyeeDetails/>}></Route>
            <Route path="/PhoneList/add" element={<AddEmployee />} />
            <Route path="/PhoneList/edit/:id" element={<AddEmployee />}></Route>
        </Route>
    </Routes>
  </BrowserRouter>
);



