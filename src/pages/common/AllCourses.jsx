import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const AllCourses = (prop) => {

  const [courses, setCourses] = useState([]);
  const {backendURL} = useContext(AppContext)
  const navigate = useNavigate();

  useEffect(() => {
    const getCourses = async () => {
      try{
        const result = await axios.get(`${backendURL}/api/course/data`)

        if (!result){
          toast(result.data.message)
        }
        else{
          setCourses(result.data.courses);
        }
      }
      catch{
        toast(result.data.message)
      }
    }

    getCourses();
  }, [])


  return (
    <>
      {prop.status === "open" ? (
        <>
          {/* search sec*/}
          <div className="w-full px-4 py-10 sm:p-20 lg:p-20">
            <form className="w-full gap-1 lg:gap-1 lg:w-3/5 h-10 sm:h-12 lg:h-12 mx-auto flex justify-between">
              <input
                type="text"
                placeholder="search here.."
                className="w-5/6 h-full pl-4 text-xs lg:text-base rounded-lg border-2 hover:ring-2 hover:ring-btn-color focus:ring-btn-color focus:outline-none"
              />

              <button
                type="submit"
                className="bg-btn-color text-xs sm:text-base lg:text-base text-secondary hover:bg-btn-color/[0.9] w-32 rounded-lg"
              >
                Search
              </button>
            </form>
          </div>

          {/* course sec */}
          <div className="h-auto">
            <div className=" mx-auto flex flex-wrap justify-between">
              {courses.map((course) => (
                <div key={course._id} className="bg-secondary w-full text-primary  shadow-card rounded-lg sm:w-64 lg:w-72 mt-5 min-h-52 flex flex-col p-3">
                  <header className="h-2/6 flex flex-col gap-1">
                    <h2 className="text-center text-base font-semibold">
                      {course.title}
                    </h2>
                    <p className="text-xs font-normal text-background">
                      
                      {course.content}
                    </p>
                    <hr />
                  </header>

                  <p className="h-3/6 text-xs mt-5">
                    {course.description}
                  </p>

                  <button
                    onClick={() =>  navigate("/coursedetails", { state: { _id: course._id }})
                    }  
                    className="w-full border-2 border-btn-color rounded-lg text-primary text-sm py-1 self-end mt-4 hover:bg-btn-color/[0.5]">
                    More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* search sec*/}
          <div className="w-full px-4 py-10 sm:p-20 lg:p-20">
            <form className="w-full gap-1 lg:gap-0 lg:w-3/5 h-10 sm:h-12 lg:h-12 mx-auto flex justify-between">
              <input
                type="text"
                placeholder="search here.."
                className="w-5/6 h-full pl-4 text-xs lg:text-base rounded-lg border-2 hover:ring-2 hover:ring-btn-color focus:ring-btn-color focus:outline-none"
              />

              <button
                type="submit"
                className="bg-btn-color text-xs sm:text-base lg:text-base text-secondary hover:bg-btn-color/[0.9] w-32 rounded-lg"
              >
                Search
              </button>
            </form>
          </div>

          {/* courses sec */}
          <div className="h-auto w-4/5 mx-auto">
            <div className=" mx-auto flex flex-wrap justify-between">
              {/* card */}
              {courses.map((course) => (
                <div
                  key={course._id}
                  className="bg-secondary text-primary w-full shadow-card rounded-lg sm:w-64 lg:w-72 mt-5 min-h-52 flex flex-col p-3">
                  <header className="h-2/6 flex flex-col gap-1">
                    <h2 className="text-center text-base font-semibold">
                      {course.title}
                    </h2>
                    <p className="text-xs font-normal text-background">
                      {course.content}
                    </p>
                    <hr />
                  </header>

                  <p className="h-3/6 text-xs mt-5">
                    {course.description}
                  </p>

                  <button
                    onClick={() =>  navigate("/coursedetails", { state: { _id: course._id }})
                    }  
                    className="w-full border-2 border-btn-color rounded-lg text-primary text-sm py-1 self-end mt-4 hover:bg-btn-color/[0.5]">
                    More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AllCourses