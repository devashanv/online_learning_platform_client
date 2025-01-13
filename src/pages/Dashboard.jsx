import React, { useState } from 'react'
import AllCourses from './common/AllCourses';
import MyEnrollments from './student/MyEnrollments';
import MyCourses from './instructor/MyCourses';
import AddNewCourse from './instructor/AddNewCourse';
import Students from './instructor/Students';

import { FaRegWindowClose } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdOutlineSpaceDashboard, MdFormatListBulleted, MdOutlineAddToPhotos } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsBook } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
  //side toggle menu
  const [isMenuOpen, setisMenuOpen] = useState(true);

  const [activeLink, setActiveLink] = useState("dashboard");

  const navgate = useNavigate();

  const handleAcitive = (link) => {
    setActiveLink(link);
  }

  const openSideMenue = () => {
    setisMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="flex">
        {/* side menu */}
        {isMenuOpen ? (
          <div className="bg-[#ebeaff] w-2/3 sm:w-1/2 lg:w-1/6 h-screen fixed">
            <div className="flex justify-end h-10 w-full px-2">
              <FaRegWindowClose
                onClick={openSideMenue}
                className="w-6 h-full text-primary hover:text-btn-color hover:cursor-pointer"
              />
            </div>

            <div className="flex flex-col mt-14 mb-5 gap-10 text-primary">
              <div className="flex flex-col gap-1 justify-center items-center">
                <RiGraduationCapFill className="w-8 h-8 text-btn-color" />

                <h1 className="text-base font-semibold">
                  Online Learning Platform
                </h1>

                <p className="text-background mt-5 text-xs">Jhon Doe</p>
              </div>
            </div>

            {/* nav items */}
            <div className="py-3 flex flex-col">
              <p 
                onClick={() => handleAcitive("dashboard")}
                className={activeLink === "dashboard" ?
                  "bg-secondary flex justify-start items-center p-3 gap-2 text-sm hover:bg-btn-color/[0.2] hover:cursor-pointer" :
                  "bg-btn-color/[0.05]  flex justify-start items-center p-3 gap-2 text-sm hover:bg-btn-color/[0.2] hover:cursor-pointer"
                }>
                <MdOutlineSpaceDashboard className="w-4 h-4" />
                Dashboard
              </p>

              <p 
                onClick={() => handleAcitive("myenroll")}
                className={activeLink === "myenroll" ?
                  "bg-secondary flex justify-start items-center p-3 gap-2 text-sm hover:bg-btn-color/[0.2] hover:cursor-pointer" :
                  "bg-btn-color/[0.05]  flex justify-start items-center p-3 gap-2 text-sm hover:bg-btn-color/[0.2] hover:cursor-pointer"
                }>
                <MdFormatListBulleted className="w-4 h-4" />
                My Enrollments
              </p>

              <p 
                onClick={() => handleAcitive("mycourse")}
                className={activeLink === "mycourse" ?
                  "bg-secondary flex justify-start items-center p-3 gap-2 text-sm hover:bg-btn-color/[0.2] hover:cursor-pointer" :
                  "bg-btn-color/[0.05]  flex justify-start items-center p-3 gap-2 text-sm hover:bg-btn-color/[0.2] hover:cursor-pointer"
                }>
                <BsBook className="w-4 h-4" />
                My courses
              </p>

              <p 
                onClick={() => handleAcitive("addcourse")}
                className={activeLink === "addcourse" ?
                  "bg-secondary flex justify-start items-center p-3 gap-2 text-sm hover:bg-btn-color/[0.2] hover:cursor-pointer" :
                  "bg-btn-color/[0.05]  flex justify-start items-center p-3 gap-2 text-sm hover:bg-btn-color/[0.2] hover:cursor-pointer"
                }>
                <MdOutlineAddToPhotos className="w-4 h-4" />
                Add course
              </p>

              <p 
                onClick={() => handleAcitive("student")}
                className={activeLink === "student" ?
                  "bg-secondary flex justify-start items-center p-3 gap-2 text-sm hover:bg-btn-color/[0.2] hover:cursor-pointer" :
                  "bg-btn-color/[0.05]  flex justify-start items-center p-3 gap-2 text-sm hover:bg-btn-color/[0.2] hover:cursor-pointer"
                }>
                <HiOutlineUsers className="w-4 h-4" />
                Studnets
              </p>

              <p 
                onClick={() => navgate("/alert")}
                className={activeLink === "student" ?
                  "bg-secondary flex justify-start items-center p-3 gap-2 text-sm hover:bg-btn-color/[0.2] hover:cursor-pointer" :
                  "bg-btn-color/[0.05]  flex justify-start items-center p-3 gap-2 text-sm hover:bg-btn-color/[0.2] hover:cursor-pointer"
                }>
                <HiOutlineUsers className="w-4 h-4" />
                alert
              </p>
            </div>
          </div>
        ) : null}

        {isMenuOpen ? (
          <main className="bg-secondar w-full lg:ml-64 lg:w-5/6 px-5 pt-2">
            <nav className="flex justify-between">
              {/* toggle menu btn */}
              {isMenuOpen ? (
                <HiMenuAlt2
                  onClick={openSideMenue}
                  className="w-8 h-8 bg-secondary rounded-lg p-1 shadow-card invisible hover:text-btn-color hover:cursor-pointer"
                />
              ) : (
                <HiMenuAlt2
                  onClick={openSideMenue}
                  className="w-8 h-8 bg-secondary rounded-lg p-1 shadow-card block hover:text-btn-color hover:cursor-pointer"
                />
              )}

              <button className="border-2 border-btn-color px-4 rounded-lg py-2 text-primary hover:bg-btn-color/[0.8]">
                Logout
              </button>
            </nav>
            
            {activeLink === "dashboard" ? (<AllCourses status="open"/>) :
             activeLink === "myenroll" ? (<MyEnrollments status="open"/>) : 
             activeLink === "mycourse" ? (<MyCourses status="open"/>) : 
             activeLink === "addcourse" ? (<AddNewCourse status="open"/>) : (<Students />)}
          </main>
        ) : (
          <main className="bg-secondary w-full px-5 pt-2">
            <nav className="flex justify-between">
              {/* toggle menu btn */}
              {isMenuOpen ? (
                <HiMenuAlt2
                  onClick={openSideMenue}
                  className="w-8 h-8 bg-secondary rounded-lg p-1 shadow-card invisible hover:bg-secondary/[0.1] hover:cursor-pointer"
                />
              ) : (
                <HiMenuAlt2
                  onClick={openSideMenue}
                  className="w-8 h-8 bg-secondary rounded-lg p-1 shadow-card block hover:bg-secondary/[0.1] hover:cursor-pointer"
                />
              )}

              <button className="border-2 border-btn-color px-4 rounded-lg py-2 text-primary hover:bg-btn-color/[0.8]">
                Logout
              </button>
            </nav>

            {activeLink === "dashboard" ? (<AllCourses status="close"/>) :
             activeLink === "myenroll" ? (<MyEnrollments status="close"/>) : 
             activeLink === "mycourse" ? (<MyCourses status="close"/>) : 
             activeLink === "addcourse" ? (<AddNewCourse status="open"/>) : (<Students />)}
          </main>
        )}
      </div>
    </>
  );
}

export default Dashboard