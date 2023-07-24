import express from "express";
const rentpayRouter = express.Router();
import RentController from "../controllers/rentpay.controller";

rentpayRouter.post("/", RentController.payRent);

export default rentpayRouter;
