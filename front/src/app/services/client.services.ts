import axios from "axios";
import { Client } from "../types/types.md";
export const getAllClients = async () => {
  const response = await axios.get(
    "http://localhost:3001/api/clients/all-clients",
    {
      withCredentials: true,
    }
  );

  const clients = response.data;
  return clients;
};

export const getAllBuyersAndTenants = async () => {
  const allClients = await getAllClients();
  const buyersAndTenants = allClients.filter((client: Client) => {
    if (client.is_buyer || client.is_tenant) return client;
  });
  return buyersAndTenants;
};

export const getAllOwners = async () => {
  const allClients = await getAllClients();
  const owners = allClients.filter((client: Client) => {
    if (client.is_owner) return client;
  });
  return owners;
};
