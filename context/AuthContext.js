import { createContext } from "react"
import { useState } from "react"
import axios from 'axios'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState('')

    const setNewToken = (newToken)=>{
        setToken(newToken)
    }

    return(
        <AuthContext.Provider value={[token, setNewToken]}>
            {children}
        </AuthContext.Provider>
    )
}