import { Request, Response } from "express";
import { createAcquisition } from "../services/acquisition.services";

class AcquisitionController {
  static async createAcquisition(req: Request, res: Response) {
    try {
      const response = await createAcquisition(req.body);
      const acquisitionID = response.path.split("/")[1];
      return res.status(201).send({ ...req.body, id: acquisitionID });
    } catch (error) {
      return res.status(400).json({ msg: "Error creating acquisition", error });
    }
  }
}

export default AcquisitionController;
