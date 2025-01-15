import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyEnrollments = (prop) => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const { backendURL, loggedUserData } = useContext(AppContext);

  const studentId = loggedUserData._id;

    //get courses
    const getStudentCourses = async () => {
      try {
        const result = await axios.post(`${backendURL}/api/enroll/courses`, {
          studentId,
        });

        console.log(result)
       
  
        if (!result) {
          toast.error(result.data);
        } else {
          setCourses(result.data.courses);
          console.log(courses)
        }
      } catch (error) {
        toast.error(result.data.message);
      }
    };

    useEffect(() => {
      getStudentCourses();
    }, []);

  return (
    <>
      {prop.status === "open" ? (
        <>
          {/* course sec */}
          <div className="h-auto">
            <div className=" mx-auto flex flex-wrap justify-between">
              {courses.map((course) => (
              <div 
                key={course._id}
                className="bg-secondary text-primary  shadow-card rounded-lg w-72 mt-5 min-h-52 flex flex-col p-3">
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

                <button className="w-full border-2 border-btn-color rounded-lg text-primary text-sm py-1 self-end mt-4 hover:bg-btn-color/[0.5]">
                  More
                </button>
              </div>
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

                <button className="w-full border-2 border-btn-color rounded-lg text-primary text-sm py-1 self-end mt-4 hover:bg-btn-color/[0.5]">
                  More
                </button>
              </div>
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

                <button className="w-full border-2 border-btn-color rounded-lg text-primary text-sm py-1 self-end mt-4 hover:bg-btn-color/[0.5]">
                  More
                </button>
              </div>
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

                <button className="w-full border-2 border-btn-color rounded-lg text-primary text-sm py-1 self-end mt-4 hover:bg-btn-color/[0.5]">
                  More
                </button>
              </div>
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

                <button className="w-full border-2 border-btn-color rounded-lg text-primary text-sm py-1 self-end mt-4 hover:bg-btn-color/[0.5]">
                  More
                </button>
              </div>
            </div>
          </div>
        </>
      )}
  
    </>
  );
}

export default MyEnrollments