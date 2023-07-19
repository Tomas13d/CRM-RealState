import express from "express";
const usersRouter = express.Router();
import UserController from "../controllers/user.controller";
import validateUserMiddleware from "../middleware";

usersRouter.post("/login", UserController.loginUser);
usersRouter.post("/register", UserController.registerUser);
usersRouter.get("/me", validateUserMiddleware, UserController.persistence);

export default usersRouter;
