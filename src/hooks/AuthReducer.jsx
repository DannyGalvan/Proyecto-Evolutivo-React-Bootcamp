import { InitialState } from "./ContextLogin";

//actions
export const LOGIN = "LOGIN";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const LOGOUT = "LOGOUT";

export const AuthReducer = (state, action) => {
  let temp;

  switch (action.type) {
    case LOGIN:
      temp = {
        ...state,
        isLoading: true,
        error: '',
      };
      localStorage.setItem("credentials", JSON.stringify(temp));
      return temp;
    case SUCCESS:
      temp =  {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        token: action.payload.token,
        email: action.payload.email,
        error: '',
      };
      localStorage.setItem("credentials", JSON.stringify(temp));
      return temp;
    case ERROR:
      temp = {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload,
      };
      localStorage.setItem("credentials", JSON.stringify(temp));
      return temp;
    case LOGOUT:
      localStorage.setItem("credentials", JSON.stringify(InitialState));
      return InitialState;
    default:
      localStorage.setItem("credentials", JSON.stringify(InitialState));
      return InitialState;
  }
};
