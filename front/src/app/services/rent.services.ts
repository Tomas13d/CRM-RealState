import axios from "axios";

export const getAllRents = async () => {
  try {
    const response = await axios.get("http://localhost:3001/api/rents", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Ha ocurrido un error al obtener todos los alquileres:",
      error
    );
    throw error;
  }
};
