import express from "express";
const acquisitionRouter = express.Router();
import AcquisitionController from "../controllers/acquisition.controller";

acquisitionRouter.post("/create", AcquisitionController.createAcquisition);
acquisitionRouter.get("/", AcquisitionController.getAllAcquisitions);
acquisitionRouter.get("/sales", AcquisitionController.getAllAcquisitionsSales);
acquisitionRouter.get("/rents", AcquisitionController.getAllAcquisitionsRents);

export default acquisitionRouter;
