import { Request, Response } from "express";
import { isValidEmail } from "../utils/utils";
import { createClient } from "../services/client.services";

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
}

export default ClientController;
