import { db } from "../firebase";
import { Acquisition } from "./types.md";

export const getAllRents = async (): Promise<Acquisition[]> => {
  const acquisitionsRef = db.collection("Acquisitions");
  const querySnapshot = await acquisitionsRef
    .where("transaction_type", "==", "rent")
    .get();

  const rents: Acquisition[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data() as Acquisition;
    rents.push(data);
  });

  return rents;
};
