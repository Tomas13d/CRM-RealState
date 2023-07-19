import express from "express";
import EstateController from "../controllers/estate.controller";
const estateRouter = express.Router();

estateRouter.post("/add-estate", EstateController.addEstate);

export default EstateController;