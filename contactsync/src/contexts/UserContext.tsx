import { ReactNode, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { RegisterData } from "../pages/Register/validator";

interface UserProviderProps {
    children: ReactNode
}

interface UserContextValues {
    userRegister: (data: RegisterData) => void  
}

export const UserContext = createContext({} as UserContextValues) 

export const UserProvider = ({children}: UserProviderProps) => {
    const navigate = useNavigate()

    const userRegister = async (data: RegisterData) => {
        try {
            await api.post("/users", data)

            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserContext.Provider value={{userRegister}}>
            {children}
        </UserContext.Provider>
    )
}