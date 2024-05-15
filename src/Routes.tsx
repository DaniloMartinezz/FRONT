import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"; 
import Home from "./Home/home.tsx";
import Login from "./Auth/Login/login.tsx"
import Register from "./Auth/Register/register.tsx";


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
 };
 
 export default AppRoutes;