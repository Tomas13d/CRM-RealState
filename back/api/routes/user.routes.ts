import express, { Request, Response } from "express";
const usersRouter = express.Router();
import UserController from "../controllers/user.controller";

usersRouter.post("/login", UserController.loginUser);
usersRouter.post("/register", UserController.registerUser);
usersRouter.put("/edit", UserController.editUser);
export default usersRouter;
