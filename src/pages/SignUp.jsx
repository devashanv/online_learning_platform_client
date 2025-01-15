import React, { useContext, useState } from 'react';
import axios from 'axios';

import { RiGraduationCapFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const SignUp = () => {

  const navigate = useNavigate();
  const {backendURL, setIsLogged} = useContext(AppContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  //signup
  const registerSubmitHandle = async (e) => {
    try{
      e.preventDefault();

      //cookie
      axios.defaults.withCredentials = true;

      const {data} = await axios.post(`${backendURL}/api/auth/register`, {firstName, lastName, email, password, role});

      if (data.success){
        setIsLogged(true);
        toast.success(data.message)
        toast.info("Plase Login now.")
        navigate("/")
      }
      else{
        toast.error(data.message)
      }
    }
    catch{
      toast.error(data.error)
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
              <h2 className="text-3xl font-bold">Register</h2>
              <p className="text-background mt-1 text-xs">
                Create your account on our platform.
              </p>
            </div>
          </header>

          {/* signup */}
          <form onSubmit={registerSubmitHandle}
            className="w-full rounded-xl py-3 flex flex-col gap-3">
            <div className="flex flex-col w-full text-sm placeholder:text-background mb-1">
              <label 
                htmlFor="password"
                className="text-xs font-medium text-primary">
                Select your role,</label>
              <div
                className="text-xs font-medium flex gap-20 mt-3">
                <lable>                   
                  <input
                    onChange={e => setRole(e.target.value)}
                    type="radio"
                    name="userType"
                    value="student"
                    className="py-2 pl-4 rounded-lg border-2 placeholder:text-sm" /> Student
                </lable>

                <lable>
                  <input 
                    onChange={e => setRole(e.target.value)}
                    type="radio"
                    name="userType"
                    value="instrutor"
                    className="py-2" /> Instructor
                </lable>                  
              </div>
            </div>

            <div className="flex flex-col w-full text-sm placeholder:text-background">
              <label 
                htmlFor="first_name"
                className="text-xs font-medium text-primary">
                First Name</label>
              <input
                onChange={e => setFirstName(e.target.value)} 
                type="text"
                id="first_name"
                placeholder="Jhon"
                required
                className="py-2 pl-4 rounded-lg border-2 placeholder:text-sm" />
            </div>

            <div className="flex flex-col w-full text-sm placeholder:text-background">
              <label 
                htmlFor="last_name"
                className="text-xs font-medium text-primary">
                Last Name</label>
              <input 
              onChange={e => setLastName(e.target.value)}
                type="text"
                id="last_name"
                placeholder="Doe"
                required
                className="py-2 pl-4 rounded-lg border-2 placeholder:text-sm" />
            </div>

            <div className="flex flex-col w-full text-sm placeholder:text-background">
              <label 
                htmlFor="email"
                className="text-xs font-medium text-primary">
                Email</label>
              <input
                onChange={e => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="jhon@gmail.com"
                required
                className="py-2 pl-4 rounded-lg border-2 placeholder:text-sm" />
            </div>

            <div className="flex flex-col w-full text-sm placeholder:text-background">
              <label 
                htmlFor="password"
                className="text-xs font-medium text-primary">
                Password</label>
                <input
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  placeholder="**********"
                  required
                  className="py-2 pl-4 rounded-lg border-2 placeholder:text-sm" />
            </div>

            <button
              type="submit"
              className="bg-btn-color py-2 rounded-lg w-full text-base font-semibold text-primary hover:bg-btn-color/[0.9] mt-3 hover:text-primary/[0.9]">
                Register
            </button>

            <div>
              <p className="text-xs text-background font-normal text-center mt-5">
                Already have an account? 
                <span 
                onClick={() => navigate("/")}
                className="text-primary underline font-semibold ml-1 hover:text-primary/[0.5] hover:cursor-pointer">Login</span>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default SignUp