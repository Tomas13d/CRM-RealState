import "firebase/compat/auth";
import { db } from "../firebase";
import { Acquisition } from "./types.md";

export const createAcquisition = async (acquisition: Acquisition) => {
  const response = await db.collection("Acquisitions").add(acquisition);
  return response;
};

export const getAcquisitions = async () => {
  const acquisitionsRef = db.collection("Acquisitions");
  const snapshot = await acquisitionsRef.get();
  const acquisitions: Acquisition[] = snapshot.docs.map(
    (doc) => doc.data() as Acquisition
  );
  return acquisitions;
};
