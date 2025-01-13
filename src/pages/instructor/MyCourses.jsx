import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { ImInfo } from "react-icons/im";

const MyCourses = (prop) => {

  const navigate = useNavigate();

  return (
    <>
      {prop.status === "open" ? (
        <>
          {/* course sec */}
          <div className="h-auto">
            <div className=" mx-auto flex flex-wrap justify-between">
              <div className="bg-secondary text-primary  shadow-card rounded-lg w-72 mt-5 min-h-52 flex flex-col p-3">
                <header className="h-2/6 flex flex-col gap-1">
                  <h2 className="text-center text-base font-semibold">
                    Introduction to Web Development
                  </h2>
                  <p className="text-xs font-normal text-background">
                    Author:
                    <span>Jhon Doe</span>
                  </p>
                  <hr />
                </header>

                <p className="h-3/6 text-xs mt-5">
                  Learn the basics of building websites, including HTML, CSS, and
                  JavaScript.
                </p>

                <div className="flex gap-3 justify-end">
                  <button 
                    onClick={() => navigate("/editcourse")}
                    className="w-10 h-10 bg-secondary shadow-card justify-center items-center rounded-full flex hover:text-btn-color">
                    <FaRegEdit  className="w-5 h-5"/>
                  </button>                  
                  <button 
                    onClick={() => navigate("/student")}
                    className="w-10 h-10 bg-secondary shadow-card justify-center items-center rounded-full flex hover:text-btn-color">
                    <FaRegTrashAlt className="w-5 h-5"/>
                  </button>                  
                  <button 
                    onClick={() => navigate("/student")}
                    className="w-10 h-10 bg-secondary shadow-card justify-center items-center rounded-full flex hover:text-btn-color">
                    <ImInfo  className="w-5 h-5"/>
                  </button>                  
                </div>
              </div>
            </div>
          </div>        
        </>
      ) : (
        <>
          <h1>my course - admin - close</h1>
          {/* courses sec */}
          <div className="h-auto w-4/5 mx-auto">
            <div className=" mx-auto flex flex-wrap justify-between">
              {/* card */}
              <div className="bg-secondary text-primary  shadow-card rounded-lg sm:w-64 lg:w-72 mt-5 min-h-52 flex flex-col p-3">
                <header className="h-2/6 flex flex-col gap-1">
                  <h2 className="text-center text-base font-semibold">
                    Introduction to Web Development
                  </h2>
                  <p className="text-xs font-normal text-background">
                    Author:
                    <span>Jhon Doe</span>
                  </p>
                  <hr />
                </header>

                <p className="h-3/6 text-xs mt-5">
                  Learn the basics of building websites, including HTML, CSS, and
                  JavaScript.
                </p>
                
                <div className="flex gap-3 justify-end">
                  <button 
                    onClick={() => navigate("/editcourse")}
                    className="w-10 h-10 bg-secondary shadow-card justify-center items-center rounded-full flex hover:text-btn-color">
                    <FaRegEdit  className="w-5 h-5"/>
                  </button>                  
                  <button 
                    onClick={() => navigate("/student")}
                    className="w-10 h-10 bg-secondary shadow-card justify-center items-center rounded-full flex hover:text-btn-color">
                    <FaRegTrashAlt className="w-5 h-5"/>
                  </button>                  
                  <button 
                    onClick={() => navigate("/student")}
                    className="w-10 h-10 bg-secondary shadow-card justify-center items-center rounded-full flex hover:text-btn-color">
                    <ImInfo  className="w-5 h-5"/>
                  </button>                  
                </div>

              </div>
            </div>
          </div>
        </>
      )}
  
    </>
  );
}

export default MyCourses