import express, { Request, Response } from "express";
const usersRouter = express.Router();
import UserController from "../controllers/user.controller";

usersRouter.post("/login", UserController.loginUser);
usersRouter.post("/regiser", UserController.registerUser);

export default usersRouter;
