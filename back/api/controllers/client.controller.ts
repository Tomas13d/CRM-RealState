import { Request, Response } from "express";
import { isValidEmail } from "../utils/utils";
import { createClient, getAllClients } from "../services/client.services";

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
}

export default ClientController;
