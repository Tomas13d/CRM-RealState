import express from "express";
const acquisitionRouter = express.Router();
import AcquisitionController from "../controllers/acquisition.controller";

acquisitionRouter.post("/create", AcquisitionController.createAcquisition);
acquisitionRouter.get("/", AcquisitionController.getAllAcquisitions);

export default acquisitionRouter;
