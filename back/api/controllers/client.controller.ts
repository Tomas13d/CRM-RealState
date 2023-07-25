import { Request, Response } from "express";
import { isValidEmail } from "../utils/utils";
import {
  createClient,
  getAllClients,
  getClientID,
} from "../services/client.services";

class ClientController {
  static async addClient(req: Request, res: Response) {
    try {
      if (!isValidEmail(req.body.email)) {
        throw new Error("Client email is not valid");
      }
      const response = await createClient(req.body);
      const newClientID = response.path.split("/")[1];
      res.status(201).send({ ...req.body, id: newClientID });
    } catch (error) {
      res.status(400).json({ msg: "Error creating client", error });
    }
  }

  static async getAllClients(_req: Request, res: Response) {
    try {
      const clients = await getAllClients();
      return res.status(200).send(clients);
    } catch (error) {
      res.status(401).json({ msg: "Error geting all clients", error });
    }
  }

  static async getClientUID(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const client = await getClientID(id);
      console.log(client);
      return res.status(200).send(client);
    } catch (error) {
      res.status(400).json({ msg: "Error to get client", error });
    }
  }
}

export default ClientController;
