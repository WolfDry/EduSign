import { createContext } from "react"
import { useState } from "react"
import axios from 'axios'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null)

    // console.log(setToken)

    return(
        <AuthContext.Provider value={[token, setToken]}>
            {children}
        </AuthContext.Provider>
    )
}