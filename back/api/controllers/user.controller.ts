const {
  login,
  register,
  registerGoogle,
} = require("../services/user.services");
import { Request, Response } from "express";

class UserController {
  static async loginUser(req: Request, res: Response) {
    try {
      const user = await login(req.body);
      const payload = {
        uid: user.uid,
        email: user.email,
      };
      res.cookie("TOKEN", user.accessToken);
      return res.status(200).send(payload);
    } catch (error) {
      res.status(500).json({ message: "Error en el inicio de sesión", error });
    }
  }

  static async registerUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await register(email, password);
      return res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }
  static async registerGoogle(req: Request, res: Response) {
    try {
      const data = await registerGoogle();
      return res.send(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserController;
