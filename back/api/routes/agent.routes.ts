import express from "express";
import AgentController from "../controllers/agent.controller";
const agentRouter = express.Router();

agentRouter.get("/", AgentController.getAllAgents);

export default agentRouter;
