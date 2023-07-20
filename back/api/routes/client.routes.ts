import express from "express";
import ClientController from "../controllers/client.controller";
const clientRouter = express.Router();

clientRouter.post("/create", ClientController.addClient);
clientRouter.get("/all-clients", ClientController.getAllClients);
export default clientRouter;
