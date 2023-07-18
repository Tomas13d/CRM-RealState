import express from "express";
const router = express.Router();
import usersRouter from "./user.routes";
import clientRouter from "./client.routes";

router.use("/users", usersRouter);
router.use("/clients", clientRouter);

export default router;
