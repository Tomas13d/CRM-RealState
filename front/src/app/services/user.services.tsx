import axios from "axios";
import { User } from "firebase/auth";

const handleErrors = (error: unknown) => {
  return { msg: "Error al obtener los agentes", error };
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3001/api/users");
    const fetchedUsers = response.data;
    return fetchedUsers;
  } catch (error) {
    return handleErrors(error);
  }
};

export const getSingleAgentByID = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/users/${id}`);
    const fetchedAgent = response.data;
    return fetchedAgent;
  } catch (error) {
    return handleErrors(error);
  }
};

export const fetchUsersAccordingToLoggedUserType = async (
  userType: string,
  userId: string
) => {
  try {
    if (userType === "agent") {
      const singleAgent = await getSingleAgentByID(userId);
      return [singleAgent];
    } else if (userType === "admin") {
      const allUsers = await getAllUsers();
      return allUsers;
    }
  } catch (error) {
    return handleErrors(error);
  }
};

export const persistence = async () => {
  const user = await axios.get("http://localhost:3001/api/users/me", {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
  return user.data;
};
