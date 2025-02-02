import React, { useContext, useEffect, useState } from 'react'
import { use } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';

const Students = () => {
    const {backendURL} = useContext(AppContext)
    const [students, setStudents] = useState([]);
    const [courseInfo, setCourseInfo] = useState("")
    const navigate = useNavigate();

    let recordNo = 1;

    //course id
    const location = useLocation();
    const {_id} = location.state;

    const getCourse = async () => {
      try{
        const result = await axios.get(`${backendURL}/api/course/course`, { params: {_id: _id} })
        
        if (!result){
          toast.error(result.data.message)
        }
        else{
          setCourseInfo(result.data.course);
        }
      }
      catch (error){
        toast.error(result.data.message)
      }
    }

    getCourse();

    //get course data
    useEffect(() => {
        const getCourseStudents = async () => {
            try {
              const result = await axios.post(`${backendURL}/api/enroll/coursestudents`, {courseId: _id})

              setStudents(result.data.students)

              if (!result) {
                toast.error(result.data.message);
              }

            } 
            catch (error) {
              toast.error(result.data.message);
            }
        };

        getCourseStudents();
    }, []);

  return (
    <>
        <div className="w-11/12  flex flex-col gap-4 mt-14 lg:w-4/5 lg:mt-24 mx-auto">
            <button
                onClick={() => navigate("/dashboard")}
                className="bg-secondary text-xs w-1/3 shadow-card p-2 lg:w-1/6 rounded-lg flex justify-center items-center gap-2 mb-10 hover:text-btn-color">
                <FaArrowLeftLong/>
                Back to courses
            </button>

            <h2 className="text-xl text-btn-color font-bold">{courseInfo.title}</h2>
            <table className="text-xs lg:text-lg border-2 w-full">
               <thead>
                <tr className="text-sm lg:text-lg">
                    <th className="border-2 py-2 font-medium">#</th>
                    <th className="border-2 py-2 font-medium">Student Name</th>
                    <th className="border-2 py-2 font-medium">Email</th>
                    <th className="border-2 py-2 font-medium">Status</th>
                </tr>
               </thead>
               <tbody>
                    {students.map((student) => (
                        <tr key={student._id}>
                            <td className="border-2 px-2 py-2">{recordNo++}</td>
                            <td className="border-2 px-2 py-2">{student.firstName + " " + student.lastName}</td>
                            <td className="border-2 px-2 py-2">{student.email}</td>
                            <td className="border-2 px-2 py-2">Following</td>
                        </tr>
                    ))}
               </tbody>
            </table>
        </div>
    </>
  )
}

export default Students