import "firebase/compat/auth";
import { auth, db } from "../firebase";
import { Client } from "./types.md";

export const createClient = async (client: Client) => {
  const response = await db.collection("Clients").add(client);
  return response;
};
