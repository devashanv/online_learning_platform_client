import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddNewCourse = () => {
    //logged user
    const {backendURL, loggedUserData} = useContext(AppContext);
    const instructorId = loggedUserData._id;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");

    //add course
    const addCourseHandle = async (e) => {
        try{
            e.preventDefault();

            const {data} = await axios.post(`${backendURL}/api/course/save`, {title, description, content, instructorId})

            if (data.success){
                toast.success(data.message)
                toast.info('Find it on "My Courses"')
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
        <div className="w-full sm:w-4/5 lg:w-3/5 mx-auto mt-14">
            <h2 className="text-3xl font-bold mb-10">Add New Course</h2>
            <form
                onSubmit={addCourseHandle} 
                className="w-full rounded-xl py-3 flex flex-col gap-3">
                <div className="flex flex-col gap-1 w-full text-sm placeholder:text-background">
                    <label
                        htmlFor="title"
                        className="text-xs font-medium text-primary">
                        Course Title
                    </label>
                    <input
                        onChange={e => setTitle(e.target.value)}
                        type="text"
                        id="title"
                        placeholder="Introduction to HTML"
                        required
                        className="py-2 pl-4 rounded-lg border-2 placeholder:text-sm"/>
                </div>

                <div className="flex flex-col gap-1 w-full text-sm placeholder:text-background">
                    <label htmlFor="description" className="text-xs font-medium text-primary">
                        Description
                    </label>
                    <textarea
                        onChange={e => setDescription(e.target.value)}
                        type="text"
                        id="description"
                        placeholder="enter course description"
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
                        onChange={e => setContent(e.target.value)}
                        type="text"
                        id="content"
                        placeholder="course content"
                        required
                        className="py-2 pl-4 rounded-lg border-2 placeholder:text-sm"/>
                </div>

                <button
                    type="submit"
                    className="bg-btn-color py-2 rounded-lg w-full text-base font-semibold text-primary hover:bg-btn-color/[0.9] mt-3 hover:text-primary/[0.9]">
                    Add Course
                </button>

            </form>            
        </div>

    </>
  );
}

export default AddNewCourse