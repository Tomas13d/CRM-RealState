import { db } from "../firebase";
import { Acquisition } from "./types.md";

export const payRent = async (data: Acquisition) => {
  return await db.collection("Acquisitions").add(data);
};
