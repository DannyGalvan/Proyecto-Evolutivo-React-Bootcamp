import React, { createContext, useReducer } from "react";
import { AuthReducer, ERROR, LOGIN, LOGOUT, SUCCESS } from "./AuthReducer";

export const InitialState = {
  email: "",
  password: "",
  token: "",
  isLoggedIn: false,
  isLoading: false,
  error: "",
};

export const AuthContextProps = {
  authState: InitialState,
  loading: () => {},
  signIn: () => {},
  errorAuth: () => {},
  logout: () => {},
};

export const AuthContext = createContext(AuthContextProps);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, InitialState);

  const loading = () => {
    dispatch({
        type: LOGIN,
    })
  }

  const signIn = (login) => {
    const data = {
      token: login.token,
      email: login.email,
    };

    localStorage.setItem("credentials", JSON.stringify(data, null, 2));

    dispatch({
      type: SUCCESS,
      payload: data,
    });
  };

  const errorAuth = (error) =>{
    dispatch({
        type: ERROR,
        payload: error
    })
  }

  const logout = () => {
    dispatch({
      type: LOGOUT,
      payload: null,
    });
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        loading,
        signIn,
        errorAuth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
