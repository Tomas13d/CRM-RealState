const { login, register, getUserID } = require("../services/user.services");
import { Request, Response } from "express";
import { isValidEmail, isValidPassword } from "../utils/utils";
import { getAllUsers } from "../services/user.services";

class UserController {
  static async loginUser(req: Request, res: Response) {
    try {
      const { data, idToken, userId } = await login(req.body);
      const payload = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
        type: data.type,
        id: userId,
      };

      res.cookie("TOKEN", idToken);
      return res.status(200).send(payload);
    } catch (error) {
      res.status(500).json({ message: "Error en el inicio de sesión", error });
    }
  }

  static logoutUser = (_req: Request, res: Response) => {
    res.clearCookie("TOKEN");
    res.sendStatus(204);
  };

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
      return res.status(400).json({ error });
    }
  }

  static async persistence(req: Request, res: Response) {
    try {
      return res.send(req.user);
    } catch (error) {
      return res.status(404).send(error);
    }
  }
  static async getUserForID(req: Request, res: Response) {
    try {
      const id: string = req.params.id;
      const response = await getUserID(id);
      return res.status(201).send(response);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  static async getAllUsers(_req: Request, res: Response) {
    try {
      const users = await getAllUsers();
      return res.status(200).send(users);
    } catch (error) {
      res.status(400).json({ msg: "Error retrieving users", error });
    }
  }
}

export default UserController;
