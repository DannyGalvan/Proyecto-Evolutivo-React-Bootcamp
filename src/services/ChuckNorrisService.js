import { chucknorris } from "../axios/config";

export const getJoke = async () => {
  const response = await chucknorris.get("/jokes/random");
  console.log(response);
  return response.data;
};
