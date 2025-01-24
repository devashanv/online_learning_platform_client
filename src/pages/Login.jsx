import React, { useContext, useState } from 'react'
import axios from 'axios';

import { RiGraduationCapFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';



const Login = () => {

  const navigate = useNavigate();

  //get context data
  const {backendURL, setIsLogged, getUserData} = useContext(AppContext);
  
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  //login
  const loginSubmitHandle = async (e) => {
    try{
      e.preventDefault();

      //cookie
      axios.defaults.withCredentials = true;

      const {data} = await axios.post(`${backendURL}/api/auth/login`, {email, password});

      if (data.success){
        setIsLogged(true);
        toast.success(data.message)
        
        //get user data
        await getUserData(data.user._id);

        //redirection
        navigate("/dashboard");
      }
      else{
        toast.error(data.message)
      }

    }
    catch (error) {
      toast.error(data.message)
    }
  }

  return (
    <>
      <main className="flex justify-center items-center flex-col h-svh">
        <div className="py-10 px-6 w-full sm:w-2/4 lg:w-1/4 rounded-xl bg-secondary sm:shadow-card lg:shadow-card">
          <header className="flex flex-col mb-5 gap-10 text-primary">
            <div className="flex gap-2">
              <RiGraduationCapFill className="w-8 h-8 text-btn-color" />
              <h1 className="text-lg font-semibold">
                Online Learning Platform
              </h1>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Login</h2>
              <p className="text-background mt-1 text-xs">
                Welcome to your education partner.
              </p>
            </div>
          </header>

          {/* login */}
          <form onSubmit={loginSubmitHandle} 
            className="w-full rounded-xl py-3 flex flex-col gap-3">
            <div className="flex flex-col w-full text-sm placeholder:text-background">
              <label 
                htmlFor="user_email"
                className="text-xs font-medium text-primary">
                Email</label>
              <input
                onChange={e => setEmail(e.target.value)}
                type="text"
                id="user_email"
                placeholder="Jhon@gmail.com"
                required
                className="py-2 pl-4 rounded-lg border-2 placeholder:text-sm" />
            </div>

            <div className="flex flex-col w-full text-sm placeholder:text-background">
              <label 
                htmlFor="user_password"
                className="text-xs font-medium text-primary">
                Password</label>
                <input
                  onChange={e => setPassword(e.target.value)} 
                  type="password"
                  id="user_password"
                  placeholder="**********"
                  required
                  className="py-2 pl-4 rounded-lg border-2 placeholder:text-sm" />
            </div>

            <button
              type="submit"
              className="bg-btn-color py-2 rounded-lg w-full text-base font-semibold text-primary hover:bg-btn-color/[0.9] mt-3 hover:text-primary/[0.9]">
                Login
            </button>

            <div>
              <p className="text-xs text-background font-normal text-center mt-5">
                Do you haven't account? 
                <span 
                onClick={() => navigate("/signup")}
                className="text-primary underline font-semibold ml-1 hover:text-primary/[0.5] hover:cursor-pointer">Register</span>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login