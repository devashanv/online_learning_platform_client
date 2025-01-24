import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();


export const AppContextProvider = (props) => {
    //state variables
    const [isLogged, setIsLogged] = useState(false);
    const [loggedUserData, setLoggedUserData] = useState(null);

    const backendURL = import.meta.env.VITE_BASE_URL;

    //get logged usesr
    const getUserData = async (id) => {
        try{
            const {data} = await axios.get(`${backendURL}/api/users/userdata`, {id})

            if (data.success){
                setLoggedUserData(data.userData)
            }
            else{
                toast.error(data.error)
            }
        }
        catch{
            toast.error(data.error)
        }
    }

    const value = {
        backendURL,
        isLogged, setIsLogged,
        loggedUserData, setLoggedUserData,
        getUserData
    }
     
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}