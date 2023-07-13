import express, { Request, Response } from "express";
const usersRouter = express.Router();
import UserController from "../controllers/user.controller";

usersRouter.post("/login", UserController.loginUser);
usersRouter.post("/register", UserController.registerUser);
usersRouter.post("/register-google", UserController.registerGoogle);
export default usersRouter;
