import "firebase/compat/auth";
import { db } from "../firebase";
import { Acquisition } from "./types.md";

export const createAcquisition = async (acquisition: Acquisition) => {
  const response = await db.collection("Acquisitions").add(acquisition);
  return response;
};
