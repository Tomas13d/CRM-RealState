import { Response } from "express";
import { getAllRents } from "../services/rent.services";

export default class RentController {
  static async getAllRents(res: Response) {
    try {
      const rents = await getAllRents();
      res.status(200).send(rents);
    } catch (error) {
      res.status(400).json({ msg: "Error retrieving rents", error });
    }
  }
}
