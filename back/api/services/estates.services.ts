import { db } from "../firebase";

type Estate = {
  name: string;
  address: string;
  description: string;
  city: string;
  expensesPice: number;
  images?: Array<string>;
  isForRent: boolean;
  isForSale: boolean;
  owner_id: string;
  salePrice: number;
  saleRent: number;
  currency: string;
  category: string;
  rooms: string;
};

export const createEstate = async (estate: Estate) => {
  const response = await db.collection("Estates").add(estate);
  console.log(response);
  return response;
};
