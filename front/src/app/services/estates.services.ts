import axios from "axios";

export const getAllEstates = async () => {
  const response = await axios.get(
    "http://localhost:3001/api/estates/all-estates",
    {
      withCredentials: true,
    }
  );

  const estates = response.data;
  return estates;
};
