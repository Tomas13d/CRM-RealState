const { login, register } = require("../services/user.services");
import { Request, Response } from "express";

import { isValidEmail, isValidPassword } from "../utils/utils";
class UserController {
  //login modificado
  static async loginUser(req: Request, res: Response) {
    try {
      const { data, idToken } = await login(req.body);
      const payload = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      };

      res.cookie("TOKEN", idToken);
      return res.status(200).send(payload);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el inicio de sesión", error });
    }
  }

  static async registerUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (isValidEmail(email) && isValidPassword(password)) {
        const user = await register(req.body);
        return res.status(201).send(user);
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  static async persistence(req: Request, res: Response) {
    try {
      return res.send(req.user);
    } catch (error) {
      return res.status(404).send(error);
    }
  }
}

export default UserController;
