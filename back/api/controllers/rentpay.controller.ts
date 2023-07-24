import { Response, Request } from "express";
import { payRent } from "../services/rentpay.services";

export default class RentPayController {
  static async payRent(_req: Request, res: Response) {
    try {
      const data = _req.body;
      console.log(data);
      const rentPay = await payRent(data);
      res.status(200).send(rentPay);
    } catch (error) {
      res.status(400).json({ msg: "Error retrieving rents", error });
    }
  }
}
