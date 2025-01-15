import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContext } from '../../context/AppContext';

const EditCourse = () => {
    const {backendURL} = useContext(AppContext)
    const navigate = useNavigate();

    //course id
    const location = useLocation();
    const {_id} = location.state;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");

    //get course data
    useEffect(() => {
        const getCourse = async () => {
          try{
            const result = await axios.get(`${backendURL}/api/course/course`, { params: {_id: _id} })
            
            const course = result.data.course;

            if (!result){
              toast(result.data.message)
            }
            else{
              setTitle(course.title)
              setContent(course.content)
              setDescription(course.description)
            }
          }
          catch (error){
            toast(result.data.message)
          }
        }
    
        getCourse();
    }, [])

    const formTitle = (e) => {
        const {value} = e.target;
        setTitle((prev) => ({
            ...prev,
            value
        }))
    }
    const formDscription = (e) => {
        const {value} = e.target;
        setDescription((prev) => ({
            ...prev,
            value
        }))
    }
    const formContent = (e) => {
        const {value} = e.target;
        setContent((prev) => ({
            ...prev,
            value
        }))
    }

    //update course
    const updateCourseHandle = async (e) => {
        try{
            e.preventDefault();

            const {data} = await axios.put(`${backendURL}/api/course/update`, {_id, title, description, content})

            if (data.success){
                toast.success(data.message)
            }
            else{
                toast.error(data.error)
            }
        }
        catch{
            toast.error(data.error)
        }
    }

  return (
    <>
        <div className="w-11/12 sm:w-4/5 lg:w-3/5 mx-auto mt-14">
            <button
                onClick={() => navigate("/dashboard")}
                className="bg-secondary text-xs shadow-card p-2  rounded-lg flex justify-center items-center gap-2 mb-10 hover:text-btn-color">
                <FaArrowLeftLong/>
                Back to courses
            </button>
            <h2 className="text-3xl font-bold mb-10">Edit Course Details</h2>
            {/* edit form */}
            <form
                onSubmit={updateCourseHandle} 
                className="w-full rounded-xl py-3 flex flex-col gap-3">
                <div className="flex flex-col gap-1 w-full text-sm placeholder:text-background">
                    <label
                        htmlFor="title"
                        className="text-xs font-medium text-primary">
                        Course Title
                    </label>
                    <input
                        onChange={formTitle}
                        type="text"
                        id="title"
                        placeholder={"Introduction to HTML"}
                        value={title}
                        required
                        className="py-2 pl-4 rounded-lg border-2 placeholder:text-sm"/>
                </div>

                <div className="flex flex-col gap-1 w-full text-sm placeholder:text-background">
                    <label htmlFor="description" className="text-xs font-medium text-primary">
                        Description
                    </label>
                    <textarea
                        onChange={formDscription}
                        type="text"
                        id="description"
                        placeholder="enter course description"
                        value={description}
                        required
                        className="py-2 pl-4 rounded-lg border-2 placeholder:text-sm resize-none">
                    </textarea>
                </div>

                <div className="flex flex-col gap-1 w-full text-sm placeholder:text-background">
                    <label
                        htmlFor="content"
                        className="text-xs font-medium text-primary">
                        Content
                    </label>
                    <input
                        onChange={formContent}
                        type="text"
                        id="content"
                        placeholder="course content"
                        value={content}
                        required
                        className="py-2 pl-4 rounded-lg border-2 placeholder:text-sm"/>
                </div>

                <button
                    type="submit"
                    className="bg-btn-color py-2 rounded-lg w-full text-base font-semibold text-primary hover:bg-btn-color/[0.9] mt-3 hover:text-primary/[0.9]">
                    Update
                </button>
            </form>               
        </div>

    </>
  )
}

export default EditCourse