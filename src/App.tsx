import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App
