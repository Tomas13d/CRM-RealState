import { db } from "../firebase";
import { Estate } from "./types.md";

export const createEstate = async (estate: Estate) => {
  const response = await db.collection("Estates").add(estate);
  return response;
};

export const getAllEstates = async () => {
  const estatesSnapshot = await db.collection("Estates").get();
  const estates: Estate[] = estatesSnapshot.docs.map((doc) => {
    return { ...(doc.data() as Estate), id: doc.id };
  });

  return estates;
};
