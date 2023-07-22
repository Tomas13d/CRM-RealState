import { db } from "../firebase";
import { Acquisition } from "./types.md";

export const getAllRents = async (): Promise<Acquisition[]> => {
  const acquisitionsRef = db.collection("Acquisitions");
  const querySnapshot = await acquisitionsRef
    .where("transaction_type", "==", "rent")
    .get();

  const rents: Acquisition[] = querySnapshot.docs.map(
    (doc) => doc.data() as Acquisition
  );

  return rents;
};
