import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


const MyEnrollments = (prop) => {
  const [isLoad, setIsLoad] = useState(true);
  const [enrollments, setEnrollments] = useState([]);

  let myCourses = [];
  const [enrollCourses, setEnrollCourses] = useState([]);
  const {backendURL, loggedUserData} = useContext(AppContext)
  const studentId = loggedUserData._id;
  const navigate = useNavigate();

  const getCourse = async (id) => {
    try{
      const result = await axios.get(`${backendURL}/api/course/course`, { params: {_id: id} })
      
      myCourses.push(result.data.course);

      console.log("myCourses", myCourses)

      if (!result){
        toast.error(result.data.message)
      }

    }
    catch (error){
      toast.error(result.data.message)
    }
  }

  useEffect(() => {
    const getAllEnrollments = async (studentId) => {
      try{
        const result = await axios.post(`${backendURL}/api/enroll/courses`,{studentId})
        
        // const enrollmments = result.data.course;
        setEnrollments(result.data.courses);
        console.log("enrolment", enrollments)
        
  
        if (!result){
          toast.error(result.data.message)
        }
      }
      catch (error){
        console.log(error)
        toast.error(result.data.message)
      }finally{
        
        enrollments.map(enroll => {
          getCourse(enroll.courseId);
        })
        setEnrollCourses(myCourses)

        setIsLoad(false)
      }
    }
  
    getAllEnrollments(studentId)

  }, [])

  console.log("enroopooooiololfrgoroi0", enrollCourses)
  console.log("enroopooooiololfrgoroi0", enrollCourses[0].title)
  
  if (isLoad){
  }
  else{
    return (
      <>
        {prop.status === "open" ? (
          <>
            {/* course sec */}
            <div className="h-auto">
              <div className=" mx-auto flex flex-wrap justify-between">
                {console.log("yakoo", enrollCourses)}
                {enrollCourses.map((course) => (
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
                <div 
                    
                    className="bg-secondary text-primary  shadow-card rounded-lg w-72 mt-5 min-h-52 flex flex-col p-3">
                  <header className="h-2/6 flex flex-col gap-1">
                    <h2 className="text-center text-base font-semibold">
              
                    </h2>
                    <p className="text-xs font-normal text-background">
                 
  
                    </p>
                    <hr />
                  </header>
  
                  <p className="h-3/6 text-xs mt-5">
                    
                  </p>
  
                  <button 
                  className="w-full border-2 border-btn-color rounded-lg text-primary text-sm py-1 self-end mt-4 hover:bg-btn-color/[0.5]">
                    More
                  </button>
                </div> 
                <div 
                    
                    className="bg-secondary text-primary  shadow-card rounded-lg w-72 mt-5 min-h-52 flex flex-col p-3">
                  <header className="h-2/6 flex flex-col gap-1">
                    <h2 className="text-center text-base font-semibold">
              
                    </h2>
                    <p className="text-xs font-normal text-background">
                 
  
                    </p>
                    <hr />
                  </header>
  
                  <p className="h-3/6 text-xs mt-5">
                    
                  </p>
  
                  <button 
                  className="w-full border-2 border-btn-color rounded-lg text-primary text-sm py-1 self-end mt-4 hover:bg-btn-color/[0.5]">
                    More
                  </button>
                </div> 

            
          
  
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
}

export default MyEnrollments