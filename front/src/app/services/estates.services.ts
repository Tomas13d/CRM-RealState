import axios from "axios";
import { Estate } from "../types/types.md";

export const getAllEstates = async () => {
  const response = await axios.get(
    "http://localhost:3001/api/estates/all-estates",
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const createNewEstate = async (newEstate: Estate) => {
  const response = await axios.post(
    "http://localhost:3001/api/estates/add",
    newEstate,
    { withCredentials: true }
  );
  const createEstate = response.data;
  return createEstate;
};
