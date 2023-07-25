import axios from "axios";
import { Estate } from "../types/types.md";

export const getAllEstates = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/estates/all-estates",
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Ha ocurrido un error al obtener todas las propiedades:",
      error
    );
    throw error;
  }
};

export const createNewEstate = async (newEstate: Estate) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/estates/add",
      newEstate,
      { withCredentials: true }
    );
    const createEstate = response.data;
    return createEstate;
  } catch (error) {
    console.error("Ha ocurrido un error al crear una nueva propiedad:", error);
    throw error;
  }
};
