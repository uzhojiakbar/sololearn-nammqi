import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import VerificationPage from "../Pages/Verify";

const RouteControl = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account/register" element={<Register />} />
      <Route path="/account/sign-in" element={<Login />} />
      <Route path="/account/verify" element={<VerificationPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default RouteControl;
