import axios from "axios";

export const getAllUsers = async (pages) => {
  const response = await axios.get(`api/users?page=${pages}`);
  return response.data;
};

export const getUserById = async (Id) => {
    const response = await axios.get(`api/users/${Id}`);
    return response.data;
}