const { login } = require("../services/agentServices");
import express, { Request, Response } from "express";

export const userLogin = async (req: Request, res: Response) => {
  try {
    const user = await login(req.body);
    return res.status(200).send(user);
  } catch (error) {
    console.error("Error en el inicio de sesión", error);
    res.status(500).json({ message: "Error en el inicio de sesión" });
  }
};
