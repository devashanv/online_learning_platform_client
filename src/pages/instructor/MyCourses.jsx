import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const MyCourses = (prop) => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const { backendURL, loggedUserData } = useContext(AppContext);

  const [showAlert, setShowAlert] = useState(false);
  const [deleteCourse, setDeleteCourse] = useState(null);

  const instructorId = loggedUserData._id;

  //get courses
  const getInstructorCourses = async () => {
    try {
      const result = await axios.post(`${backendURL}/api/course/incourses`, {
        instructorId,
      });

      if (!result) {
        toast.error(result.data);
      } else {
        setCourses(result.data.courses);
      }
    } catch (error) {
      toast.error(result.data.message);
    }
  };

  //delete course
  const deleteCourseFun = async () => {
    try {
      const _id = deleteCourse;
      const result = await axios.delete(`${backendURL}/api/course/delete`, {data: {_id}});

      if (!result) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
      }
    } 
    catch (error) {
      toast.error(result.message);
    }
  };

  useEffect(() => {
    getInstructorCourses();
  }, []);

  const canselDelete = () => {
    setShowAlert(false);
    setDeleteCourse(null);
  };

  const confirmDelete = () => {
    deleteCourseFun();
    setShowAlert(false);
    setDeleteCourse(null);
    getInstructorCourses();
  };

  //delete course
  const handleAlert = (id) => {
    setDeleteCourse(id);
    setShowAlert(true);
  };

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
                  className="bg-secondary text-primary  shadow-card rounded-lg w-72 mt-5 min-h-52 flex flex-col p-3"
                >
                  <header className="h-2/6 flex flex-col gap-1">
                    <h2 className="text-center text-base font-semibold">
                      {course.title}
                    </h2>
                    <p className="text-xs font-normal text-background">
                      {course.content}
                    </p>
                    <hr />
                  </header>

                  <p className="h-3/6 text-xs mt-5">{course.description}</p>

                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={() => handleAlert(course._id)}
                      className="w-10 h-10 bg-secondary shadow-card justify-center items-center rounded-full flex hover:text-btn-color"
                    >
                      <FaRegTrashAlt className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        navigate("/editcourse", { state: { _id: course._id }})
                      }
                      className="w-10 h-10 bg-secondary shadow-card justify-center items-center rounded-full flex hover:text-btn-color"
                    >
                      <FaRegEdit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => navigate("/student", { state: { _id: course._id } })}
                      className="w-10 h-10 bg-secondary shadow-card justify-center items-center rounded-full flex hover:text-btn-color"
                    >
                      <ImInfo className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
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
              {courses.map((course) => (
                <div
                  key={course._id}
                  className="bg-secondary text-primary  shadow-card rounded-lg sm:w-64 lg:w-72 mt-5 min-h-52 flex flex-col p-3"
                >
                  <header className="h-2/6 flex flex-col gap-1">
                    <h2 className="text-center text-base font-semibold">
                      {course.title}
                    </h2>
                    <p className="text-xs font-normal text-background">
                      {course.content}
                    </p>
                    <hr />
                  </header>

                  <p className="h-3/6 text-xs mt-5">{course.description}</p>

                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={() => handleAlert(course._id)}
                      className="w-10 h-10 bg-secondary shadow-card justify-center items-center rounded-full flex hover:text-btn-color"
                    >
                      <FaRegTrashAlt className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => navigate("/editcourse", { state: { _id: course._id } })}
                      className="w-10 h-10 bg-secondary shadow-card justify-center items-center rounded-full flex hover:text-btn-color"
                    >
                      <FaRegEdit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => navigate("/student", { state: { _id: course._id } })}
                      className="w-10 h-10 bg-secondary shadow-card justify-center items-center rounded-full flex hover:text-btn-color"
                    >
                      <ImInfo className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* delete popup */}
      {showAlert ? (
        <>
          <div className="glass-effect flex justify-center items-center w-full h-svh absolute top-0 ml-[-20px]">
            <div className="bg-secondary flex flex-col items-center justify-center shadow-card h-52 p-5 w-96 rounded-lg border-t-[10px] border-t-btn-color">
              <p className="text-center text-lg">Are you sure to delete?</p>
              <div className="w-full flex justify-center items-center gap-8 mt-8">
                <button
                  onClick={() => confirmDelete()}
                  className="bg-red-600 text-secondary px-4 py-2 rounded-lg hover:bg-red-600/[0.8]"
                >
                  Delete
                </button>
                <button
                  onClick={() => canselDelete()}
                  className="border border-gray-600 text-primary px-4 py-2 rounded-lg hover:bg-background/[0.5]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default MyCourses