import { randomuser, reqrest } from "../axios/config";

export const getAllUsers = async (pages) => {
  const response = await reqrest.get(`/users?page=${pages}`);
  return response;
};

export const getUserById = async () => {
    const response = await randomuser.get(`/api`);
    return response.data;
}