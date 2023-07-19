import "firebase/compat/auth";
import { auth, db } from "../firebase";

type Client = {
  email: string;
  first_name: string;
  last_name: string;
  is_owner: boolean;
  is_buyer: boolean;
  is_tenant: boolean;
  assigned_agent_name?: string;
  assigned_agent_id?: string;
};

export const createClient = async (client: Client) => {
  const response = await db.collection("Clients").add(client);
  return response;
};
