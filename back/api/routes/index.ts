import express from "express";
const router = express.Router();
import usersRouter from "./user.routes";
import clientRouter from "./client.routes";
import acquisitionRouter from "./acquisition.routes";

router.use("/users", usersRouter);
router.use("/clients", clientRouter);
router.use("/acquisitions", acquisitionRouter);

export default router;
