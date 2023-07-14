import express from "express";
const router = express.Router();
import usersRouter from "./user.routes";

router.use("/users", usersRouter);

export default router;
