import express from "express";
import EstateController from "../controllers/estate.controller";
const estateRouter = express.Router();
import EstatesMiddlewares from "../middleware/estates.middleware";

estateRouter.get("/all-estates", EstateController.getAllEstates);
estateRouter.post(
  "/add",
  EstatesMiddlewares.processNewEstateRequest,
  EstateController.addEstate
);

export default estateRouter;
