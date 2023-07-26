import axios from "axios";
import { Client } from "../types/types.md";

export const getAllClients = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/clients/all-clients",
      {
        withCredentials: true,
      }
    );

    const clients = response.data;
    return clients;
  } catch (error) {
    console.error("Ha ocurrido un error al obtener todos los clientes:", error);
    throw error;
  }
};

export const getAllBuyersAndTenants = async () => {
  try {
    const allClients = await getAllClients();
    const buyersAndTenants = allClients.filter((client: Client) => {
      if (client.is_buyer || client.is_tenant) return client;
    });
    return buyersAndTenants;
  } catch (error) {
    console.error(
      "Ha ocurrido un error al obtener los compradores y arrendatarios:",
      error
    );
    throw error;
  }
};

export const getAllOwners = async () => {
  try {
    const allClients = await getAllClients();
    const owners = allClients.filter((client: Client) => {
      if (client.is_owner) return client;
    });
    return owners;
  } catch (error) {
    console.error("Ha ocurrido un error al obtener los propietarios:", error);
    throw error;
  }
};
