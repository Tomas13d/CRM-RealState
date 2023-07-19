import "firebase/compat/auth";
import { auth, db } from "../firebase";

type Acquisition = {
  description: string;
  agent_id: string;
  owner_id: string;
  buyer_id: string;
  tenant_id: string;
  estate_id: string;
  transaction_type: string;
  transaction_price: number;
  transaction_currency: string;
  transaction_date: string;
};

export const createAcquisition = async (acquisition: Acquisition) => {
  const response = await db.collection("Acquisitions").add(acquisition);
  return response;
};
