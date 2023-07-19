import express from "express";
const rentRouter = express.Router();
import RentController from "../controllers/rent.controlllers";

rentRouter.get("/", RentController.getAllRents);

export default rentRouter;
