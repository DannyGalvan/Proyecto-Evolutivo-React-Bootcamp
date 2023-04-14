import React, { createContext, useState} from 'react';

export const InitialState = {
    email: "",
    password: ""
}

export const AuthContextProps = {
    authState: InitialState,
    signIn: () => {},
    logout: () => {},
}

export const AuthContext = createContext(AuthContextProps);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(localStorage.getItem("credentials") || InitialState);

    const signIn = (login) => {  
        localStorage.setItem("credentials", JSON.stringify(login, null, 2));
        setAuthState(login)
    }

    const logout = () => {
       setAuthState(InitialState)
       localStorage.clear();
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}
