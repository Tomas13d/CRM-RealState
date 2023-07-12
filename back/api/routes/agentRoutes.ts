import express, { Request, Response } from "express";
const agentRouter = express.Router();

import { userLogin } from "../controllers/agentControllers";

agentRouter.post("/login", userLogin);
