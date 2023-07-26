import { db } from "../firebase";
import { Estate } from "./types.md";

export const createEstate = async (estate: Estate) => {
  return await db.collection("Estates").add(estate);
};

export const getAllEstates = async () => {
  const estatesSnapshot = await db.collection("Estates").get();
  const estates: Estate[] = estatesSnapshot.docs.map((doc) => {
    return { ...(doc.data() as Estate), id: doc.id };
  });
  return estates;
};

export const getEstateID = async (id: string) => {
  const estateRef = db.collection("Estates").doc(id);
  const estateSnapshot = await estateRef.get();
  let estateData;
  estateSnapshot.exists
    ? (estateData = estateSnapshot.data())
    : console.log("La propiedad con el id proporcionado no existe.");
  return estateData;
};
