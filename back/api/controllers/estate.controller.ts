import { Request, Response } from "express";
import { createEstate } from "../services/estates.services";

class EstateController {
  static async addEstate(req: Request, res: Response) {
    try {
      const response = await createEstate(req.body);

      res.status(201).send(response);
    } catch (error) {
      res.status(400).json({ msg: "Error creating estate", error });
    }
  }
}

export default EstateController;
