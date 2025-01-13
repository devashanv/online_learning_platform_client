import React from 'react'

const AddNewCourse = () => {
  return (
    <>
        <div className="w-full sm:w-4/5 lg:w-3/5 mx-auto mt-14">
            <h2 className="text-3xl font-bold mb-10">Add New Course</h2>
            <form action="" className="w-full rounded-xl py-3 flex flex-col gap-3">
                <div className="flex flex-col gap-1 w-full text-sm placeholder:text-background">
                    <label
                        htmlFor="title"
                        className="text-xs font-medium text-primary">
                        Course Title
                    </label>
                    <input
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
                        Password
                    </label>
                    <input
                        type="text"
                        id="content"
                        placeholder="course content"
                        required
                        className="py-2 pl-4 rounded-lg border-2 placeholder:text-sm"/>
                </div>

                <button
                type="submit"
                className="bg-btn-color py-2 rounded-lg w-full text-base font-semibold text-primary hover:bg-btn-color/[0.9] mt-3 hover:text-primary/[0.9]">
                Register
                </button>

            </form>            
        </div>

    </>
  );
}

export default AddNewCourse