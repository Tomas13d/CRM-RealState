import axios from "axios";

export const getAllRents = async () => {
  const response = await axios.get("http://localhost:3001/api/rents", {
    withCredentials: true,
  });
  return response.data;
};
