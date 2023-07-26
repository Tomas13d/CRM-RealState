import { Request, Response } from "express";
import {
  createEstate,
  getAllEstates,
  getEstateID,
} from "../services/estates.services";

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
  static async getEstateUID(_req: Request, res: Response) {
    try {
      const id = _req.params.id;
      const estate = await getEstateID(id);
      return res.status(200).send(estate);
    } catch (error) {
      res.status(400).json({ msg: "Error to get estate", error });
    }
  }
}

export default EstateController;
