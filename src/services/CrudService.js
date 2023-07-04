import { reqrest } from "../axios/config";

export const login = (email, password) => {
  const data = {
    email: email,
    password: password,
  };

  const response = reqrest.post("/login", data);

  return response;
};
