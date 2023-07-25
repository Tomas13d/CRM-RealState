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
