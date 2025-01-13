import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Students from './pages/instructor/Students';
import MyCourses from './pages/instructor/MyCourses';
import EditCourse from './pages/instructor/EditCourse';
import AlertBox from './componets/AlertBox';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/student" element={<Students />}/>
        <Route path="/mycourse" element={<MyCourses />}/>
        <Route path="/editcourse" element={<EditCourse />}/>
        <Route path="/alert" element={<AlertBox />}/>
      </Routes>
    </>
  )
}

export default App