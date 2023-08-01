import { db } from "../firebase";
import { getClientID } from "./client.services";
import { estateData, Estate, Client } from "./types.md";

export const createEstate = async (estate: estateData) => {
  const owner = (await getClientID(estate.owner_id)) as Client;
  const newState: Estate = {
    ...estate,
    owner: owner,
  };

  return await db.collection("Estates").add(newState);
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
    : console.error("La propiedad con el id proporcionado no existe.");
  return estateData;
};
