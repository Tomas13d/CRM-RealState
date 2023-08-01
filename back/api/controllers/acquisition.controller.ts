import { Request, Response } from "express";
import {
  createAcquisition,
  getAcquisitions,
  getAllAcquisitionsSales,
  getAllAcquisitionsRents,
  postModifiedPrice,
} from "../services/acquisition.services";

class AcquisitionController {
  static async createAcquisition(req: Request, res: Response) {
    try {
      const response = await createAcquisition(req.body);
      const acquisitionID = response.path.split("/")[1];
      return res.status(201).send({ ...req.body, id: acquisitionID });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ msg: "Error creating acquisition", error });
    }
  }

  static async getAllAcquisitions(_req: Request, res: Response) {
    try {
      const acquisitions = await getAcquisitions();
      res.status(200).send(acquisitions);
    } catch (error) {
      res.status(400).json({ msg: "Error retrieving Acquisitions", error });
    }
  }

  static async getAllAcquisitionsSales(_req: Request, res: Response) {
    try {
      const acquisitions = await getAllAcquisitionsSales();
      res.status(200).send(acquisitions);
    } catch (error) {
      res.status(400).json({ msg: "Error retrieving Acquisitions", error });
    }
  }

  static async getAllAcquisitionsRents(_req: Request, res: Response) {
    try {
      const acquisitions = await getAllAcquisitionsRents();
      res.status(200).send(acquisitions);
    } catch (error) {
      res.status(400).json({ msg: "Error retrieving Acquisitions", error });
    }
  }

  static async postModifiedPrice(_req: Request, res: Response) {
    try {
      const id: string = _req.params.id;
      const { newPrice } = _req.body;
      const acquisition = await postModifiedPrice(id, Number(newPrice));
      res.status(200).send(acquisition);
    } catch (error) {
      res.status(400).json({ msg: "Error to route modified-Price", error });
    }
  }
}

export default AcquisitionController;
