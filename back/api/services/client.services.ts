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
export const getClientID = async (id: string) => {
  try {
    const clientRef = db.collection("Clients").doc(id);
    const clientSnapshot = await clientRef.get();

    if (!clientSnapshot.exists) {
      console.log("El cliente con el id proporcionado no existe.");
      return null; // O podrías lanzar una excepción, dependiendo del caso de uso.
    }

    const clientData = clientSnapshot.data();
    return clientData;
  } catch (error) {
    console.error("Error al obtener el cliente:", error);
    return null; // O podrías lanzar una excepción, dependiendo del caso de uso.
  }
};
