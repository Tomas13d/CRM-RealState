import express from "express";
const usersRouter = express.Router();
import UserController from "../controllers/user.controller";
import validateUserMiddleware from "../middleware";

usersRouter.post("/login", UserController.loginUser);
usersRouter.get("/logout", UserController.logoutUser);
usersRouter.post("/register", UserController.registerUser);
usersRouter.get("/me", validateUserMiddleware, UserController.persistence);
usersRouter.get("/", UserController.getAllUsers);
usersRouter.get("/:id", UserController.getUserForID);

export default usersRouter;
