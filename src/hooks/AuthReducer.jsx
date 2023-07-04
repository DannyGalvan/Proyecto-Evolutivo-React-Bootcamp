import { InitialState } from "./ContextLogin";

//actions
export const LOGIN = "LOGIN";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const LOGOUT = "LOGOUT";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        token: action.payload.token,
        email: action.payload.email,
        error: '',
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload,
      };
    case LOGOUT:
      return InitialState;
    default:
      return InitialState;
  }
};
