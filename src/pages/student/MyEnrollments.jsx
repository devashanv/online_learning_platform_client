import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


const MyEnrollments = (prop) => {
  const [enrollments, setEnrollments] = useState([]);
  const [enrollStatus, setEnrollStatus] = useState(false);
  const navigate = useNavigate();

  const {backendURL, loggedUserData} = useContext(AppContext)
  const studentId = loggedUserData._id;


  //student enrollments
  const getEnrollments = async () => {

    try{
      const result = await axios.post(`${backendURL}/api/enroll/enrollments`, {studentId: studentId})
      
      if (result){
        setEnrollStatus(true)
        setEnrollments(result.data.courses)
      }

    }
    catch{
       toast.error(result.data.message)
    }
  }

  useEffect(() => {
    getEnrollments();
  }, [])

  if (enrollStatus){
    return (
      <>
        {prop.status === "open" ? (
          <>
            {/* course sec */}
            <div className="h-auto">
              <div className=" mx-auto flex flex-wrap justify-start gap-4">
                {enrollments.map((enroll) => (
                  <div
                    key={enroll._id}
                    className="bg-secondary text-primary  shadow-card rounded-lg w-72 mt-5 min-h-52 flex flex-col p-3"
                  >
                    <header className="h-2/6 flex flex-col gap-1">
                      <h2 className="text-center text-base font-semibold">
                        {enroll.title}
                      </h2>
                      <p className="text-xs font-normal text-background">
                        {enroll.content}
                      </p>
                      <hr />
                    </header>

                    <p className="h-3/6 text-xs mt-5">{enroll.description}</p>

                    <button
                      onClick={() =>
                        navigate("/coursedetails", {
                          state: { _id: enroll._id },
                        })
                      }
                      className="w-full border-2 border-btn-color rounded-lg text-primary text-sm py-1 self-end mt-4 hover:bg-btn-color/[0.5]"
                    >
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
              <div className=" mx-auto flex flex-wrap justify-start gap-4">
                {/* card */}
                {enrollments.map((enroll) => (
                  <div
                    key={enroll._id}
                    className="bg-secondary text-primary  shadow-card rounded-lg sm:w-64 lg:w-72 mt-5 min-h-52 flex flex-col p-3"
                  >
                    <header className="h-2/6 flex flex-col gap-1">
                      <h2 className="text-center text-base font-semibold">
                        {enroll.title}
                      </h2>
                      <p className="text-xs font-normal text-background">
                        {enroll.content}
                      </p>
                      <hr />
                    </header>

                    <p className="h-3/6 text-xs mt-5">{enroll.description}</p>

                    <button
                      onClick={() =>
                        navigate("/coursedetails", {
                          state: { _id: enroll._id },
                        })
                      }
                      className="w-full border-2 border-btn-color rounded-lg text-primary text-sm py-1 self-end mt-4 hover:bg-btn-color/[0.5]"
                    >
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
  else {
    return (
      <>
        {prop.status === "open" ? (
          <>
            {/* course sec */}
            <div className="h-auto">
              <div className=" mx-auto flex flex-wrap justify-between">
                <h2 className="text-background text-center">Haven't enroolments yet.</h2>
              </div>
            </div>        
          </>
        ) : (
          <>
            {/* courses sec */}
            <div className="h-auto w-4/5 mx-auto">
              <div className=" mx-auto flex flex-wrap justify-between">
                <h2 className="text-background text-center">Haven't enroolments yet.</h2>
              </div>
            </div>
          </>
        )}
    
      </>
    );
  }
}


export default MyEnrollments