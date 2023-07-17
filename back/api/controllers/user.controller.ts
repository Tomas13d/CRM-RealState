const { login, register, edit } = require("../services/user.services");
import { Request, Response } from "express";
import { isValidEmail, isValidPassword } from "../utils/utils";
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
      if (isValidEmail(email) && isValidPassword(password)) {
        const user = await register(email, password);
        return res.status(201).send(user);
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      res.status(400).send(error);
    }
  }
  static async editUser(req: Request, res: Response) {
    try {
      const { uid, user } = req.body;
      const editUser = await edit(uid, user);
      console.log("Datos actualizados correctamente: ", user);
      return res.status(201).send(user);
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
      res.status(400).send(error);
    }
  }
}

export default UserController;
