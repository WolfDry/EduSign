import { createContext } from "react"
import { useState } from "react"
import axios from 'axios'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(false)

    const login = async (email, password) => {

        const jwtToken = 'fakeToken';

        const config = {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + jwtToken,
            }
        }

        const data = await axios.get('http://localhost:8000/api/resources', config)
            .then((response) => {
                console.log(response)
                return response.data;
            });

        console.log(data);
    }

    return(
        <AuthContext.Provider value={{token}}>
            {children}
        </AuthContext.Provider>
    )
}