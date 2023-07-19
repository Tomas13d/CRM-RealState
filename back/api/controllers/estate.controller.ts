import { Request, Response } from "express";
import { createEstate, getAllEstates } from "../services/estates.services";

class EstateController {
  static async addEstate(req: Request, res: Response) {
    try {
      const response = await createEstate(req.body);

      res.status(201).send(response);
    } catch (error) {
      res.status(400).json({ msg: "Error creating estate", error });
    }
  }

  static async getAllEstates(_req: Request, res: Response) {
    try {
      const estates = await getAllEstates();
      return res.status(200).send(estates);
    } catch (error) {
      res.status(400).json({ msg: "Error to get all estates", error });
    }
  }
}

export default EstateController;
