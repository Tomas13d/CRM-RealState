import axios from "axios";
import {
  Acquisition,
  AcquisitionFrond,
  RawNewAcquisition,
} from "../types/types.md";

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
    const response = await axios.get(
      "http://localhost:3001/api/acquisitions/rents",
      {
        withCredentials: true,
      }
    );

    return response.data;

    /*     rentsAcquisition.map(async (acquisition: AcquisitionFrond) => {
      const agent_id = await axios.get(
        `http://localhost:3001/api/users/${acquisition.agent_id}`,
        {
          withCredentials: true,
        }
      );
      const tenant_id = await axios.get(
        `http://localhost:3001/api/clients/${acquisition.tenant_id}`,
        {
          withCredentials: true,
        }
      );
      const estate_id = await axios.get(
        `http://localhost:3001/api/estates/${acquisition.estate_id}`,
        {
          withCredentials: true,
        }
      );
    }); */
  } catch (error) {
    console.error("An error occurred while getting all rentals:", error);
    throw error;
  }
};


export const getAllAcquisitions = async () =>{
  try{
    const response = await axios.get("http://localhost:3001/api/acquisitions")
    const fetchedAcquisitions = response.data
    return fetchedAcquisitions
  }
  catch (error){
    throw error
  }
}
