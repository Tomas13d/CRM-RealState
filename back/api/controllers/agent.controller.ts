import { Request, Response } from "express";
import { getAllAgents } from "../services/agent.services";

class AgentController {
  static async getAllAgents(_req: Request, res: Response) {
    try {
      const agents = await getAllAgents();
      res.status(200).send(agents);
    } catch (error) {
      res.status(400).json({ msg: "Error retrieving agents", error });
    }
  }
}

export default AgentController;
