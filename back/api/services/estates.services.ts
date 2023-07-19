import { db } from "../firebase";
import { Estate } from "./types.md";

export const createEstate = async (estate: Estate) => {
  const response = await db.collection("Estates").add(estate);
  return response;
};
