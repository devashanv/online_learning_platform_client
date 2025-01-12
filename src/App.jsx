import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </>
  )
}

export default App