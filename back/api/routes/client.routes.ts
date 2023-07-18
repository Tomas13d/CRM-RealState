import express from "express";
import ClientController from "../controllers/client.controller";
const clientRouter = express.Router();

clientRouter.post("/create", ClientController.addClient);

export default clientRouter;
