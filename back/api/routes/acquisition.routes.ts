import express from "express";
const acquisitionRouter = express.Router();
import AcquisitionController from "../controllers/acquisition.controller";

acquisitionRouter.post("/create", AcquisitionController.createAcquisition);
acquisitionRouter.get("/", AcquisitionController.getAllAcquisitions);
acquisitionRouter.get("/sales", AcquisitionController.getAllAcquisitionsSales);
acquisitionRouter.get("/rents", AcquisitionController.getAllAcquisitionsRents);
acquisitionRouter.post(
  "/modified-price/:id",
  AcquisitionController.postModifiedPrice
);
acquisitionRouter.post(
  "/payment-rent/:id",
  AcquisitionController.postPaymentRent
);

export default acquisitionRouter;
