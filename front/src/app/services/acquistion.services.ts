import axios from "axios";
import { Acquisition, RawNewAcquisition } from "../types/types.md";

const transformNewAcquistionKeys = (
  newAcquisition: RawNewAcquisition
): Acquisition => {
  const date = new Date();
  const newAcquisitionProcessed = {
    description: newAcquisition.description,
    estate_id: newAcquisition.estateID,
    [newAcquisition.transactionType === "rent" ? "tenant_id" : "buyer_id"]:
      newAcquisition.buyerOrTenantID,
    transaction_type: newAcquisition.transactionType,
    transaction_currency: newAcquisition.transactionCurrency,
    transaction_price: parseInt(newAcquisition.transactionPrice),
    transaction_date: date.toLocaleDateString("en-AR"),
  };

  return newAcquisitionProcessed;
};

export const createNewAcquistion = async (
  newAcquisition: RawNewAcquisition
) => {
  try {
    const newAcquisitionProcessed = transformNewAcquistionKeys(newAcquisition);

    const createdAcquisition = await axios.post(
      "http://localhost:3001/api/acquisitions/create",
      newAcquisitionProcessed,
      {
        withCredentials: true,
      }
    );
    return createdAcquisition;
  } catch (error) {
    console.error("Ha ocurrido un error al crear la adquisición:", error);
    throw error;
  }
};

export const detalleAdminRentals = async () => {
  try {
    const getAllRentsToAcquisitions = await axios.get(
      "http://localhost:3001/api/rents",
      {
        withCredentials: true,
      }
    );
    const rentsAcquisition: Array<Acquisition> = getAllRentsToAcquisitions.data;
    console.log(rentsAcquisition);

    rentsAcquisition.map(async (acquisition: Acquisition) => {
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
    console.log(rentsAcquisition);

    return rentsAcquisition;
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
