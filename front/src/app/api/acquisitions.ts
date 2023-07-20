import axios from "axios";

export const getAllEstates = async () => {
  const estates = await axios.get("http:localhost:3001/api/estates", {
    withCredentials: true,
  });

  // return states
};
