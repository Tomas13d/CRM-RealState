import { db } from "../firebase";
import { Estate } from "./types.md";

export const createEstate = async (estate: Estate) => {
  const response = await db.collection("Estates").add(estate);
  return response;
};

export const getAllEstates = async () => {
  const estatesSnapshot = await db.collection("Estates").get();
  const estates: Estate[] = [];

  estatesSnapshot.forEach((doc) => {
    const estateData = doc.data() as Estate;
    estates.push(estateData);
  });
  return estates;
};
