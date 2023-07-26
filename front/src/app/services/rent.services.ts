import axios from "axios";
import { Acquisition } from "../types/types.md";
export const detalleAdminRentals = async () => {
  //esta ruta traer todos los alquileres alquilados o de "acquisition";
  try {
    const getAllRentsToAcquisitions: Array<Acquisition> = await axios.get(
      "http://localhost:3001/api/rents",
      {
        withCredentials: true,
      }
    );
    getAllRentsToAcquisitions.map(async (acquisition: Acquisition) => {
      //const idAgent=acquisition.agent_id; //agente ---> Users
      //const idTenant=acquisition.tenant_id; //inquilino ---> Clients
      //const idEstate=acquisition.estate_id; //propiedad ---> Estates

      acquisition.agent_id = await axios.get(
        `http://localhost:3001/api/users/${acquisition.agent_id}`,
        {
          withCredentials: true,
        }
      );
      acquisition.tenant_id = await axios.get(
        `http://localhost:3001/api/clients/${acquisition.tenant_id}`,
        {
          withCredentials: true,
        }
      );
      acquisition.estate_id = await axios.get(
        `http://localhost:3001/api/estates/${acquisition.estate_id}`,
        {
          withCredentials: true,
        }
      );
    });
    return getAllRentsToAcquisitions;
  } catch (error) {
    console.error("An error occurred while getting all rentals:", error);
    throw error;
  }
};

/* export type Acquisition = {
  description: string;
  agent_id?: string;
  buyer_id?: string;
  tenant_id?: string;
  estate_id: string;
  transaction_type: string;
  transaction_price: number;
  transaction_currency: string;
  transaction_date: string;
}; */
