import "firebase/compat/auth";
import { db } from "../firebase";
import { Client } from "./types.md";

export const createClient = async (client: Client) => {
  const response = await db.collection("Clients").add(client);
  return response;
};

export const getAllClients = async () => {
  const clientsSnapshot = await db.collection("Clients").get();
  const clients: Client[] = clientsSnapshot.docs.map((doc) => {
    return { ...(doc.data() as Client), id: doc.id };
  });

  return clients;
};
